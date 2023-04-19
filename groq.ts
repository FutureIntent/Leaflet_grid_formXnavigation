type Operator = 'in' | '==' | '!=' | '<' | '>';

type Direction = 'asc' | 'desc';

interface GroqParams {
    type: string;
    fields: string;
    isSingle?: boolean;
}
class Groq {
    pointer = 0;

    page = 0;

    pageSize = 5;

    isSingle = false;

    fields: string;

    filters: string[] = [];

    filterParams: { [key: string]: string | number | boolean } = {};

    orderParams: { by: string; direction: Direction } | undefined;

    constructor({ type, fields, isSingle }: GroqParams) {
        this.filter({ field: '_type', params: type });
        this.fields = fields;

        if (isSingle) {
            this.isSingle = isSingle;
        }
    }

    private movePointer(): number {
        this.pointer += 1;

        return this.pointer;
    }

    private getCurrentPageArray(): string {
        return `[${this.page * this.pageSize}...${this.page * this.pageSize + this.pageSize}]`;
    }

    public setPageSize(size: number): void {
        this.pageSize = size;
    }

    public setPage(page: number): void {
        this.page = page;
    }

    public filter({
        field,
        params,
        operator = '==',
    }: {
        field: string;
        params: boolean | number | string | string[];
        operator?: Operator;
    }): void {
        if (Array.isArray(params)) {
            const arrayFilter: string[] = [];

            params.forEach((param) => {
                const pointer = this.movePointer();
                arrayFilter.push(`$${pointer} ${operator} ${field}`);
                this.filterParams[pointer] = param;
            });

            this.filters.push(`(${arrayFilter.join(' || ')})`);
        } else {
            const pointer = this.movePointer();
            this.filters.push(`${field} ${operator} $${pointer}`);
            this.filterParams[pointer] = params;
        }
    }

    public addRawFilter(filter: string): void {
        this.filters.push(`${filter}`);
    }

    public inlineFilter({
        field,
        params,
        operator = '==',
    }: {
        field: string;
        params: string;
        operator?: Operator;
    }): void {
        this.filters.push(`${field} ${operator} ${params}`);
    }

    public order({ by, direction = 'asc' }: { by: string; direction?: Direction }): void {
        this.orderParams = { by, direction };
    }

    public getQuery(): string {
        let query = `*[${this.filters.join(' && ')}]${this.fields}`;

        if (this.orderParams) {
            query += `| order(${this.orderParams.by} ${this.orderParams.direction})`;
        }

        query += this.isSingle ? '[0]' : this.getCurrentPageArray();

        return query;
    }

    public getQueryParams(): { [key: string]: string | number | boolean } {
        return this.filterParams;
    }
}

export default Groq;
