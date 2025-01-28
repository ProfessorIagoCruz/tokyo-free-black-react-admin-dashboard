import { Permission } from "./Permission";

export type Group = {
    id:number;
    name: String;
    codename:string;
}
export type GroupDetail = Group & {
    permissions: Permission[]
    name: String;
    codename:string;
}
export type ApiGetGroups = {
    groups: GroupDetail[]
}

export type ApiGetGroup = {
    groups: GroupDetail
}

