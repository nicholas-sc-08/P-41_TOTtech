export const logos = [{ src: "/bumnLogo.png", alt: "Bumn" }, { src: "/citylinkLogo.svg", alt: "Citylink" }, { src: "/spotifyLogo.svg", alt: "Spotify" }, { src: "/valeLogo.png", alt: "Vale" }, { src: "/forbesLogo.svg", alt: "Forbes" }];

export const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.15,
        },
    },
};

export const itemVariants = {
    hidden: { opacity: 0, y: 30, scale: 0.9 },
    visible: {
        opacity: 1,
        y: 0,
        scale: 1,
        transition: { duration: 0.5, ease: "easeOut" }
    },
};