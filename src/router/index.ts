import {createRouter, createWebHistory, Router, RouteRecordRaw} from "vue-router";
import Dashboard from "@/components/Dashboard.vue";

const routes: Array<RouteRecordRaw> = [
    {
        path: "/",
        name: "main",
        component: Dashboard,
        children: [
            {
                path: "/work",
                name: "work",
                component: () => {},
            }
        ]
    }
];


const router: Router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;