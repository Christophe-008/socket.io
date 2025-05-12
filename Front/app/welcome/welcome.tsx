import logoLight from "./logo-light.svg";

export function Welcome() {
    return (
        <main className="flex items-center justify-center p-5">
            <div className="flex-1 flex flex-col items-center gap-16 min-h-0">
                <div className="flex flex-col items-center gap-9">
                    <div className="max-w-[100vw] p-4">
                        <img
                            src={logoLight}
                            alt="React Router"
                            className="block w-xs"
                        />
                        <p className="text-center text-xs text-gray-500">
                            version : 7.5.0
                        </p>
                    </div>
                </div>
            </div>
        </main>
    );
}
