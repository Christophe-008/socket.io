export interface Route {
    LoaderArgs: {
        params: {
            roomId: string;
        };
    };
    ComponentProps: {
        loaderData: {
            roomName: string;
            roomId: string;
        };
    };
}
