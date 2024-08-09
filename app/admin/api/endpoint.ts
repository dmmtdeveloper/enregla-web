const environment: "development" | "testing" | "production" = "development";

const protocol: string = environment === "development" ? "http" : "https";
const port: number = environment === "development" ? 4000 : 4000;
const url: string = environment === "development" ? "192.168.0.9" : "216.225.204.60";
// const url: string = environment === "development" ? "10.146.151.187" : "216.225.204.60";

export const endpoint: string = `${protocol}://${url}:${port}/api`;
