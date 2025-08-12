import { Link } from "react-router-dom";

export default function LoginForm() {

    return (
        <>
            <div className="border border-gray-300 p-10 rounded-[3px] shadow-md max-w-md mx-auto my-15">
                <div>
                    <form className="login-form flex flex-col gap-4">
                        <label htmlFor="email">Email:</label>
                        <input type="email"
                            id="email"
                            name="email"
                            required
                            placeholder="email"
                            className="border border-gray-300 p-1 rounded-[3px]" />

                        <label htmlFor="password">Password:</label>
                        <input type="password"
                         id="password"
                          name="password"
                           required
                             placeholder="password"
                           className="border border-gray-300 p-1 rounded-[3px]" />

                        <button type="submit" className="border border-gray-300 p-1 rounded-[3px] bg-dinmaegler-blue text-white">Login</button>
                    </form>

                    <div className="">
                        <p className="mt-5 mb-1">Login med</p>
                        <div className="grid grid-cols-3 gap-2">
                            <button className="bg-red-500 text-white py-2 rounded-[3px]">Google</button>
                            <button className="bg-blue-600 text-white py-2 rounded-[3px]">Facebook</button>
                            <button className="bg-blue-400 text-white py-2 rounded-[3px]">Twitter</button>
                        </div>
                    </div>
                    <div className="">
                        <p className="mt-5 mb-1">Har du ikke en konto? <span className="text-blue-500"><Link to="/register">Opret bruger.</Link></span></p>

                    </div>
                </div>
            </div>
        </>
    )
}