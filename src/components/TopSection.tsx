import Avatar from "./Avatar.tsx";

export default function TopSection() {
    return (
        <section className="h-screen flex flex-col justify-center">
            <div className="flex flex-col items-center gap-8">
                <h1 className="text-6xl">Elliott DuCharme</h1>
                <p className="text-2xl">Software Engineer, Web Developer</p>
                <Avatar/>
            </div>

        </section>
    )
}