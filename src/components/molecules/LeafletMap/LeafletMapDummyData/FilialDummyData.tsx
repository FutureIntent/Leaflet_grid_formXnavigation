import { Filial } from "../LeafletMapTypes/FilialTypes"

export const filial: Filial = {
    id: 1,
    name: "Gain Hard",
    address: "458 Oxford St, London",
    workHours: "08:00 - 20:00",
    status: true,
    imageURL: 'https://media.istockphoto.com/photos/empty-gym-picture-id1132006407?k=20&m=1132006407&s=612x612&w=0&h=Z7nJu8jntywb9jOhvjlCS7lijbU4_hwHcxoVkxv77sg=',
    discount: 20,
    procedures: ['Full-body', 'Body', 'Local', 'Face'],
    distance: 25,
    coordinates: [51.51430298379232, -0.15437698823980042]
}

export const filial2: Filial = {
    id: 2,
    name: "No pain - No gain",
    address: "Latvia, Riga",
    workHours: "22:00 - 06:00",
    status: false,
    imageURL: 'https://images.squarespace-cdn.com/content/v1/5f2729003294916c4921e58b/1610137976198-RGTG2VR3YWBYGJJTDIC4/Gym-Origo-23.jpg',
    discount: null,
    procedures: ['Full-body', 'Body', 'Local', 'Face'],
    distance: 100000,
    coordinates: [56.96785871264243, 24.101753187109136]
}

export const filial3: Filial = {
    id: 3,
    name: "Cryo Gym",
    address: "Russia, Moscow",
    workHours: "06:00 - 14:00",
    status: true,
    imageURL: 'https://static.lsm.lv/media/2020/09/large/1/dtsr.jpg',
    discount: 50,
    procedures: ['Full-body', 'Body'],
    distance: 150,
    coordinates: [55.76137826779062, 37.57090165669755]
}

export const filial4: Filial = {
    id: 4,
    name: "Hard Gains",
    address: "Latvia, Riga, Kipsala",
    workHours: "12:00 - 20:00",
    status: true,
    imageURL: 'https://www.greeka.com/photos/greece-sports/gym/hero/greece-sports-gym-1920.jpg',
    discount: 10,
    procedures: ['Face'],
    distance: 15,
    coordinates: [56.95671483302198, 24.08309990125772]
}

export const filial5: Filial = {
    id: 5,
    name: "Feugiat ipsum labore kasd dignissim ut ipsum nonumy sed amet nonummy nonumy sanctus est diam at nulla justo labore accusam",
    address: "Ipsum nonummy kasd cum sea nonumy minim rebum accusam takimata ut nulla eirmod sit ut duo labore sed in dolor accusam nonumy gubergren dolore ut dolore ut lorem vel accusam blandit lorem invidunt nonumy nonumy nonumy nibh duis cum magna dignissim nonumy dolore accusam te ea duo lorem amet et",
    workHours: "12:00 - 20:00",
    status: false,
    imageURL: 'https://www.wellton.com/storage/files/oasis4-spa-1920x1080.jpg',
    discount: 5,
    procedures: ['Body', 'Local'],
    distance: 2370,
    coordinates: [55.76508533794342, 37.59657065956273]
}

const FilialDummyData: Filial[] = [filial, filial2, filial3, filial4, filial5, filial, filial2, filial3, filial4, filial5, filial, filial2, filial3, filial4, filial5];

export default FilialDummyData;