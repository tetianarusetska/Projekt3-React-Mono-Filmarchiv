import * as yup from "yup";

const nameVal = /^[A-Za-zA-Яа-яЁёÄÖÜäöüß\s-]{2,50}$/;
const usernameVal = /^[a-z0-9_]{3,20}$/;
const instagramVal = /^@?[a-zA-Z0-9._]{0,30}$/;

const schema = yup.object({
    displayName: yup
        .string()
        .required("Bitte geben Sie Ihren Namen ein.")
        .matches(nameVal, "Bitte geben Sie einen gültigen Namen ein."),

    username: yup
        .string()
        .required("Bitte geben Sie einen Benutzernamen ein.")
        .matches(usernameVal, "Nur Kleinbuchstaben, Zahlen und Unterstriche (3-20 Zeichen)."),

    location: yup
        .string()
        .max(20, "Maximal 20 Zeichen."),

    bio: yup
        .string()
        .max(220, "Die Bio darf maximal 220 Zeichen lang sein."),

    socials: yup.object({
        instagram: yup
            .string()
            .matches(instagramVal, "Bitte geben Sie einen gültigen Instagram-Namen ein."),
    }),
});

export default schema;