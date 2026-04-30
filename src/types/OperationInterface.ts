import type {Component} from "vue";

export interface OperationInterface {
    slug: string;
    name: string;
    component?: Component
}