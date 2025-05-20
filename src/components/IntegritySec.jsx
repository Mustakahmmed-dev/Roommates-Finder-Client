

const IntegritySec = () => {
    return (
        <div className=" w-10/12 mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 bg-gray-50 border-t-2 border-gray-300 py-5">
            {/* Grid 1 */}
            <div className="text-center">
                <img src="https://i.ibb.co/5XMX5KYq/dealing-man.png" alt="Matching icon" className="mx-auto mb-4 w-16 h-16" />
                <h3 className="text-xl font-semibold mb-2">Smart Matchmaking</h3>
                <p className="text-gray-600">
                    FindMates connects you with compatible roommates based on shared preferences, lifestyle habits, and availability—cutting the guesswork out.
                </p>
            </div>

            {/* Grid 2 */}
            <div className="text-center">
                <img src="https://i.ibb.co/8gwbJ5Nm/verification.png" alt="Safety icon" className="mx-auto mb-4 w-16 h-16" />
                <h3 className="text-xl font-semibold mb-2">Verified & Secure</h3>
                <p className="text-gray-600">
                    Every listing goes through both automated and manual checks. Our secure chat keeps your conversations safe, private, and scam-free.
                </p>
            </div>

            {/* Grid 3 */}
            <div className="text-center">
                <img src="https://i.ibb.co/TBkqrs4K/decision-making.png" alt="Speed icon" className="mx-auto mb-4 w-16 h-16" />
                <h3 className="text-xl font-semibold mb-2">Faster Decisions</h3>
                <p className="text-gray-600">
                    No more endless scrolling—see only relevant matches, connect instantly, and lock in the right roommate when timing matters most.
                </p>
            </div>
        </div>

    )
}

export default IntegritySec;