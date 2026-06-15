import { useForm } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"
import { useState } from "react"
import { useNavigate, Navigate } from "react-router-dom"
import { updateProfile } from "firebase/auth"
import { doc, setDoc } from "firebase/firestore"
import { auth, db } from "../../../firebase/config.js"
import { useAuth } from "../../../providers/AuthContext.jsx"
import schema from "../../../schemas/profileFormValidation.js"


export default function FillProfile() {

    const { user } = useAuth();
    const navigate = useNavigate();

    const [saving, setSaving] = useState(false);
    const [error, setError] = useState("");

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({
        mode: "onSubmit",
        resolver: yupResolver(schema),
        defaultValues: {
            displayName: user?.displayName || "",
            username: user?.username || "",
            location: user?.location || "",
            bio: user?.bio || "",
            socials: {
                instagram: user?.socials?.instagram || "",
            },
        },
    });

    if (!user) return <Navigate to="/anmeldung" />

    const onSubmit = async (data) => {

        setSaving(true);
        setError("");

        try {

            await updateProfile(auth.currentUser, {
                displayName: data.displayName,
            });

            await setDoc(
                doc(db, "users", user.uid),
                data,
                { merge: true }
            );

            navigate("/profil");

        } catch (err) {
            setError("Profil konnte nicht gespeichert werden. Bitte versuche es erneut.");
            console.error(err);
        } finally {
            setSaving(false);
        }
    };

    return (
        <div className="h-screen w-screen flex flex-col justify-center items-center">
            <form
                onSubmit={handleSubmit(onSubmit)}
                className="mt-30 flex flex-col justify-center items-center text-[20px] font-[Untitled] gap-10 border border-(--mainColor) w-160 h-180 px-40 py-40 rounded-2xl transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl backdrop-blur-lg"
            >

                <div className="flex flex-col gap-2">
                    <label>Dein Name</label>
                    <input
                        type="text"
                        {...register("displayName")}
                        className="border border-(--mainColor) w-100 h-7.5 rounded-sm text-[18px]"
                    />
                    {errors.displayName && <p className="text-(--mainColor) text-[14px]">{errors.displayName.message}</p>}
                </div>

                <div className="flex flex-col gap-2">
                    <label>Benutzername</label>
                    <input
                        type="text"
                        {...register("username")}
                        placeholder="ohne @"
                        className="border border-(--mainColor) w-100 h-7.5 rounded-sm text-[18px]"
                    />
                    {errors.username && <p className="text-(--mainColor) text-[14px]">{errors.username.message}</p>}
                </div>

                <div className="flex flex-col gap-2">
                    <label>Standort</label>
                    <input
                        type="text"
                        {...register("location")}
                        className="border border-(--mainColor) w-100 h-7.5 rounded-sm text-[18px]"
                    />
                    {errors.location && <p className="text-(--mainColor) text-[14px]">{errors.location.message}</p>}
                </div>

                <div className="flex flex-col gap-2">
                    <label>Bio</label>
                    <textarea
                        {...register("bio")}
                        rows={3}
                        className="border border-(--mainColor) w-100 h-7.5 rounded-sm text-[18px]"
                    />
                    {errors.bio && <p className="text-(--mainColor)text-[14px]">{errors.bio.message}</p>}
                </div>

                <div className="flex flex-col gap-2">
                    <label>Instagram</label>
                    <input
                        type="text"
                        {...register("socials.instagram")}
                        placeholder="@benutzername"
                        className="border border-(--mainColor) w-100 h-7.5 rounded-sm text-[18px]"
                    />
                    {errors.socials?.instagram && <p className="text-(--mainColor) text-[14px]">{errors.socials.instagram.message}</p>}
                </div>

                {error && (
                    <p className="text-(--mainColor) text-[16px]">{error}</p>
                )}

                <div className="flex flex-row gap-15 justify-center mt-2">
                    <button
                        type="submit"
                        disabled={saving}
                        className="p-3 mt-5 rounded-md w-42.5 h-10 flex items-center justify-center gap-2 text-(--mainColor) backdrop-blur-md bg-(--mainColor)/5 border border-(--mainColor)/20 shadow-lg transition-all duration-300 hover:bg-(--mainColor)/10 hover:scale-[1.03] active:scale-[0.98]"
                    >
                        {saving ? "Speichern..." : "Speichern"}
                    </button>
                    <button
                        type="button"
                        onClick={() => navigate("/profil")}
                        className="p-3 mt-5 rounded-md w-42.5 h-10 flex items-center justify-center gap-2 text-(--mainColor) backdrop-blur-md bg-(--mainColor)/5 border border-(--mainColor)/20 shadow-lg transition-all duration-300 hover:bg-(--mainColor)/10 hover:scale-[1.03] active:scale-[0.98]"
                    >
                        Abbrechen
                    </button>
                </div>

            </form>
        </div>
    )
}
