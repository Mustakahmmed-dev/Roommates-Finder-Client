
const FrequentlyAskQuest = () => {
    return (
        <div className="w-10/12 mx-auto">
            <div>
                <h2 className="text-3xl font-bold text-center text-cyan-500 my-5">
                    Frequently Asked Questions
                </h2>
            </div>

            <div className="collapse collapse-arrow bg-base-100 border border-base-300">
                <input type="radio" name="faq-accordion" defaultChecked />
                <div className="collapse-title font-semibold">
                    How do I find a roommate?
                </div>
                <div className="collapse-content text-sm">
                    Go to the homepage and see the currently available rooms. Or explore the browse listings nav page to see all the listings.
                </div>
            </div>

            <div className="collapse collapse-arrow bg-base-100 border border-base-300">
                <input type="radio" name="faq-accordion" />
                <div className="collapse-title font-semibold">
                    Can I contact a user directly?
                </div>
                <div className="collapse-content text-sm">
                    Yes! Like a listing to reveal the contact number, or use the platform's message system to reach out directly.
                </div>
            </div>

            <div className="collapse collapse-arrow bg-base-100 border border-base-300">
                <input type="radio" name="faq-accordion" />
                <div className="collapse-title font-semibold">
                    Is it free to post a listing?
                </div>
                <div className="collapse-content text-sm">
                    Yes, posting a listing is completely free. You just need to create an account and complete your profile.
                </div>
            </div>

            <div className="collapse collapse-arrow bg-base-100 border border-base-300">
                <input type="radio" name="faq-accordion" />
                <div className="collapse-title font-semibold">
                    Can I edit or delete my listing?
                </div>
                <div className="collapse-content text-sm">
                    Absolutely. Go to your account dashboard to update or remove your listings anytime.
                </div>
            </div>

            <div className="collapse collapse-arrow bg-base-100 border border-base-300">
                <input type="radio" name="faq-accordion" />
                <div className="collapse-title font-semibold">
                    What should I do if I encounter a suspicious user?
                </div>
                <div className="collapse-content text-sm">
                    Report the information immediately to our support team by the contact information given below in the footer or send email at info@findmates.com.
                </div>
            </div>
        </div>

    )
}

export default FrequentlyAskQuest;