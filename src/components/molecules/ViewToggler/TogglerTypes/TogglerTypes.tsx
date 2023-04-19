import { Variant } from "@components/atoms/Typography"
import { Dispatch } from "react"

export type TogglerDataType = {
    [key: string]: boolean
}

export interface TogglerContainerInterface {
    justifyContent: string
}

export interface TogglerType {
    view: TogglerDataType,
    setView: Dispatch<TogglerDataType>,
    justifyContent?: string,
    icons?: string[],
    textVariant?: Variant
}

export type TogglerByURLDataType = {
    [key: string]: string
}

export interface TogglerByURLType {
    view: TogglerByURLDataType,
    justifyContent?: string,
    icons?: string[],
    textVariant?: Variant
}

export interface NavigationTogglerType {
    view: TogglerDataType,
    setView: Dispatch<TogglerDataType>,
    progress?: boolean
}

export interface NavigationType {
    view: TogglerDataType,
    setView: Dispatch<any>
}

export interface ProgressBarType {
    view: TogglerDataType
}