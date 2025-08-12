

export default function RegisterForm() {

    return (
        <>
            <div className="border border-gray-300 p-10 rounded-[3px] shadow-md max-w-md mx-auto my-15">
                <div>
                    <form className="login-form flex flex-col gap-4">
                        <label htmlFor="fullname">Fulde navn:</label>
                        <input
                            type="text"
                            id="fullname"
                            name="fullname"
                            required
                            placeholder="Fulde navn"
                            className="border border-gray-300 p-1 rounded-[3px]"
                        />

                        <label htmlFor="email">Email:</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            required
                            placeholder="email"
                            className="border border-gray-300 p-1 rounded-[3px]"
                        />

                        <label htmlFor="password">Adgangskode:</label>
                        <input
                            type="password"
                            id="password"
                            name="password"
                            required
                            placeholder="Adgangskode"
                            className="border border-gray-300 p-1 rounded-[3px]"
                        />

                        <label htmlFor="confirmPassword">Bekræft adgangskode:</label>
                        <input
                            type="password"
                            id="confirmPassword"
                            name="confirmPassword"
                            required
                            placeholder="Bekræft adgangskode"
                            className="border border-gray-300 p-1 rounded-[3px]"
                        />

                        <button type="submit" className="border border-gray-300 p-1 rounded-[3px] bg-dinmaegler-blue text-white">
                            Opret bruger
                        </button>
                    </form>
               
                </div>
            </div>
        </>
    )
}