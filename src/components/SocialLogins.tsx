import { doSocialLogin } from "@/actions/index";

const SocialLogins = () => {
    return (
        <form action={doSocialLogin}>
            <button
                className="bg-tBase text-white p-4 rounded-md text-md sm:text-sm"
                type="submit"
                name="action"
                value="google"
            >
                Sign In With Google
            </button>
        </form>
    );
};

export default SocialLogins;
