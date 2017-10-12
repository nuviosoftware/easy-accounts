import { Router } from "express";


export interface IRoute {
    create(router: Router);
}
