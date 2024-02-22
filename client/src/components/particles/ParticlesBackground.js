import React from "react";
import { useCallback } from "react";
import { useSelector } from "react-redux";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";

const ParticlesBackground = () => {
    const mode = useSelector((state) => state.app.mode);
    const colorVar = mode === "dark" ? "#f7f7f7" : "#000000";
    const particlesInit = useCallback(async (engine) => {
        console.log(engine);
        await loadFull(engine);
    }, []);

    const particlesLoaded = useCallback(async (container) => {
        await console.log(container);
    }, []);

    const option1 = {
        // fullScreen: {
        //     // zIndex: -1,
        // },
        style: {
            position: "absolute",
        },
        particles: {
            number: {
                value: 200,
                density: {
                    enable: true,
                    value_area: 800,
                },
            },
            color: {
                value: `${colorVar}`,
            },
            shape: {
                type: "circle",
                stroke: {
                    width: 0,
                    color: "#000000",
                },
                polygon: {
                    nb_sides: 5,
                },
                image: {
                    src: "img/github.svg",
                    width: 100,
                    height: 100,
                },
            },
            opacity: {
                value: 0.5,
                random: true,
                anim: {
                    enable: false,
                    speed: 1,
                    opacity_min: 0.1,
                    sync: false,
                },
            },
            size: {
                value: 8,
                random: true,
                anim: {
                    enable: false,
                    speed: 40,
                    size_min: 0.1,
                    sync: false,
                },
            },
            line_linked: {
                enable: false,
                distance: 500,
                color: "#ffffff",
                opacity: 0.4,
                width: 2,
            },
            move: {
                enable: true,
                speed: 4,
                direction: "top-right",
                random: false,
                straight: false,
                out_mode: "out",
                bounce: false,
                attract: {
                    enable: false,
                    rotateX: 600,
                    rotateY: 1200,
                },
            },
        },
        interactivity: {
            detect_on: "canvas",
            events: {
                onhover: {
                    enable: true,
                    mode: "repulse",
                },
                onclick: {
                    enable: true,
                    mode: "push",
                },
                resize: true,
            },
            modes: {
                grab: {
                    distance: 400,
                    line_linked: {
                        opacity: 0.5,
                    },
                },
                bubble: {
                    distance: 400,
                    size: 4,
                    duration: 0.3,
                    opacity: 1,
                    speed: 3,
                },
                repulse: {
                    distance: 89.09551849541971,
                    duration: 0.4,
                },
                push: {
                    particles_nb: 4,
                },
                remove: {
                    particles_nb: 2,
                },
            },
        },
        retina_detect: true,
    };
    const option2 = {
        style: {
            position: "absolute",
        },
        particles: {
            number: {
                value: 80,
                density: {
                    enable: true,
                    value_area: 800,
                },
            },
            color: {
                value: `${colorVar}`,
            },
            shape: {
                type: "circle",
                stroke: {
                    width: 0,
                    color: `${colorVar}`,
                },
                polygon: {
                    nb_sides: 5,
                },
                image: {
                    src: "img/github.svg",
                    width: 100,
                    height: 100,
                },
            },
            opacity: {
                value: 0.5,
                random: false,
                anim: {
                    enable: false,
                    speed: 1,
                    opacity_min: 0.1,
                    sync: false,
                },
            },
            size: {
                value: 5,
                random: true,
                anim: {
                    enable: false,
                    speed: 40,
                    size_min: 0.1,
                    sync: false,
                },
            },
            line_linked: {
                enable: true,
                distance: 150,
                color: `${colorVar}`,
                opacity: 0.4,
                width: 1,
            },
            move: {
                enable: true,
                speed: 6,
                direction: "none",
                random: false,
                straight: false,
                out_mode: "out",
                attract: {
                    enable: false,
                    rotateX: 600,
                    rotateY: 1200,
                },
            },
        },
        interactivity: {
            detect_on: "canvas",
            events: {
                onhover: {
                    enable: true,
                    mode: "repulse",
                },
                onclick: {
                    enable: true,
                    mode: "push",
                },
                resize: true,
            },
            modes: {
                grab: {
                    distance: 400,
                    line_linked: {
                        opacity: 1,
                    },
                },
                bubble: {
                    distance: 400,
                    size: 40,
                    duration: 2,
                    opacity: 8,
                    speed: 3,
                },
                repulse: {
                    distance: 90,
                },
                push: {
                    particles_nb: 4,
                },
                remove: {
                    particles_nb: 2,
                },
            },
        },
        retina_detect: true,
    };
    const option3 = {
        autoPlay: true,
        defaultThemes: {},
        delay: 0,
        detectRetina: true,
        duration: 0,
        fpsLimit: 120,
        interactivity: {
            detectsOn: "window",
            events: {
                onClick: {
                    enable: false,
                    mode: [],
                },
                onDiv: {
                    selectors: [],
                    enable: false,
                    mode: [],
                    type: "circle",
                },
                onHover: {
                    enable: true,
                    mode: "trail",
                    parallax: {
                        enable: false,
                        force: 2,
                        smooth: 10,
                    },
                },
                resize: {
                    delay: 0.5,
                    enable: true,
                },
            },
            modes: {
                trail: {
                    delay: 0.005,
                    pauseOnStop: true,
                    quantity: 1,
                    particles: {
                        color: {
                            value: "red",
                            // value: `${colorVar}`,
                            // value: "#ff0000",
                            animation: {
                                enable: true,
                                speed: 400,
                                sync: true,
                            },
                        },
                        collisions: {
                            enable: false,
                        },
                        links: {
                            enable: false,
                        },
                        move: {
                            outModes: {
                                default: "destroy",
                            },
                            speed: 2,
                        },
                        size: {
                            value: 5,
                            animation: {
                                enable: true,
                                speed: 8,
                                minimumValue: 1,
                                sync: true,
                                startValue: "min",
                                destroy: "max",
                            },
                        },
                    },
                },
                attract: {
                    distance: 200,
                    duration: 0.4,
                    easing: "ease-out-quad",
                    factor: 1,
                    maxSpeed: 50,
                    speed: 1,
                },
                bounce: {
                    distance: 200,
                },
                bubble: {
                    distance: 200,
                    duration: 0.4,
                    mix: false,
                    divs: {
                        distance: 200,
                        duration: 0.4,
                        mix: false,
                        selectors: [],
                    },
                },
                connect: {
                    distance: 80,
                    links: {
                        opacity: 0.5,
                    },
                    radius: 60,
                },
                grab: {
                    distance: 100,
                    links: {
                        blink: false,
                        consent: false,
                        opacity: 1,
                    },
                },
                push: {
                    default: true,
                    groups: [],
                    quantity: 4,
                },
                remove: {
                    quantity: 2,
                },
                repulse: {
                    distance: 200,
                    duration: 0.4,
                    factor: 100,
                    speed: 1,
                    maxSpeed: 50,
                    easing: "ease-out-quad",
                    divs: {
                        distance: 200,
                        duration: 0.4,
                        factor: 100,
                        speed: 1,
                        maxSpeed: 50,
                        easing: "ease-out-quad",
                        selectors: [],
                    },
                },
                slow: {
                    factor: 3,
                    radius: 200,
                },
                light: {
                    area: {
                        gradient: {
                            start: {
                                value: "#ffffff",
                            },
                            stop: {
                                value: "#000000",
                            },
                        },
                        radius: 1000,
                    },
                    shadow: {
                        color: {
                            value: "#000000",
                        },
                        length: 2000,
                    },
                },
            },
        },
        manualParticles: [],

        particles: {
            bounce: {
                horizontal: {
                    random: {
                        enable: false,
                        minimumValue: 0.1,
                    },
                    value: 1,
                },
                vertical: {
                    random: {
                        enable: false,
                        minimumValue: 0.1,
                    },
                    value: 1,
                },
            },
            collisions: {
                absorb: {
                    speed: 2,
                },
                bounce: {
                    horizontal: {
                        random: {
                            enable: false,
                            minimumValue: 0.1,
                        },
                        value: 1,
                    },
                    vertical: {
                        random: {
                            enable: false,
                            minimumValue: 0.1,
                        },
                        value: 1,
                    },
                },
                enable: false,
                maxSpeed: 50,
                mode: "bounce",
                overlap: {
                    enable: true,
                    retries: 0,
                },
            },
            color: {
                value: "#ff0000",
                // value: `${colorVar}`,
                animation: {
                    h: {
                        count: 0,
                        enable: true,
                        offset: 0,
                        speed: 50,
                        delay: 0,
                        decay: 0,
                        sync: false,
                    },
                    s: {
                        count: 0,
                        enable: false,
                        offset: 0,
                        speed: 1,
                        delay: 0,
                        decay: 0,
                        sync: true,
                    },
                    l: {
                        count: 0,
                        enable: false,
                        offset: 0,
                        speed: 1,
                        delay: 0,
                        decay: 0,
                        sync: true,
                    },
                },
            },
            groups: {},
            move: {
                angle: {
                    offset: 0,
                    value: 90,
                },
                attract: {
                    distance: 200,
                    enable: false,
                    rotate: {
                        x: 3000,
                        y: 3000,
                    },
                },
                center: {
                    x: 50,
                    y: 50,
                    mode: "percent",
                    radius: 0,
                },
                decay: 0,
                distance: {},
                direction: "none",
                drift: 0,
                enable: true,
                gravity: {
                    acceleration: 9.81,
                    enable: false,
                    inverse: false,
                    maxSpeed: 50,
                },
                path: {
                    clamp: true,
                    delay: {
                        random: {
                            enable: false,
                            minimumValue: 0,
                        },
                        value: 0,
                    },
                    enable: false,
                    options: {},
                },
                outModes: {
                    default: "out",
                    bottom: "out",
                    left: "out",
                    right: "out",
                    top: "out",
                },
                random: false,
                size: false,
                speed: 2,
                spin: {
                    acceleration: 0,
                    enable: false,
                },
                straight: false,
                trail: {
                    enable: false,
                    length: 10,
                    fill: {},
                },
                vibrate: false,
                warp: false,
            },
            number: {
                density: {
                    enable: true,
                    width: 1920,
                    height: 1080,
                },
                limit: 0,
                value: `${mode === "light" ? 300 : 200}`,
            },
            opacity: {
                random: {
                    enable: true,
                    minimumValue: 0.3,
                },
                value: {
                    min: 0.3,
                    max: 0.8,
                },
                animation: {
                    count: 0,
                    enable: true,
                    speed: 0.5,
                    decay: 0,
                    delay: 0,
                    sync: false,
                    mode: "auto",
                    startValue: "random",
                    destroy: "none",
                    minimumValue: 0.3,
                },
            },
            reduceDuplicates: false,
            shadow: {
                blur: 0,
                color: {
                    value: "#000",
                },
                enable: false,
                offset: {
                    x: 0,
                    y: 0,
                },
            },
            shape: {
                close: true,
                fill: true,
                options: {},
                type: "circle",
            },
            size: {
                random: {
                    enable: true,
                    minimumValue: 1,
                },
                value: {
                    min: 1,
                    max: 3,
                },
                animation: {
                    count: 0,
                    enable: true,
                    speed: 3,
                    decay: 0,
                    delay: 0,
                    sync: false,
                    mode: "auto",
                    startValue: "random",
                    destroy: "none",
                    minimumValue: 1,
                },
            },
            stroke: {
                width: 0,
            },

            destroy: {
                bounds: {},
                mode: "none",
                split: {
                    count: 1,
                    factor: {
                        random: {
                            enable: false,
                            minimumValue: 0,
                        },
                        value: 3,
                    },
                    rate: {
                        random: {
                            enable: false,
                            minimumValue: 0,
                        },
                        value: {
                            min: 4,
                            max: 9,
                        },
                    },
                    sizeOffset: true,
                    particles: {},
                },
            },
            roll: {
                darken: {
                    enable: false,
                    value: 0,
                },
                enable: false,
                enlighten: {
                    enable: false,
                    value: 0,
                },
                mode: "vertical",
                speed: 25,
            },
            tilt: {
                random: {
                    enable: false,
                    minimumValue: 0,
                },
                value: 0,
                animation: {
                    enable: false,
                    speed: 0,
                    decay: 0,
                    sync: false,
                },
                direction: "clockwise",
                enable: false,
            },
            twinkle: {
                lines: {
                    enable: false,
                    frequency: 0.05,
                    opacity: 1,
                },
                particles: {
                    enable: false,
                    frequency: 0.05,
                    opacity: 1,
                },
            },
            wobble: {
                distance: 5,
                enable: false,
                speed: {
                    angle: 50,
                    move: 10,
                },
            },
            life: {
                count: 0,
                delay: {
                    random: {
                        enable: false,
                        minimumValue: 0,
                    },
                    value: 0,
                    sync: false,
                },
                duration: {
                    random: {
                        enable: false,
                        minimumValue: 0.0001,
                    },
                    value: 0,
                    sync: false,
                },
            },
            rotate: {
                random: {
                    enable: false,
                    minimumValue: 0,
                },
                value: 0,
                animation: {
                    enable: false,
                    speed: 0,
                    decay: 0,
                    sync: false,
                },
                direction: "clockwise",
                path: false,
            },
            orbit: {
                animation: {
                    count: 0,
                    enable: false,
                    speed: 1,
                    decay: 0,
                    delay: 0,
                    sync: false,
                },
                enable: false,
                opacity: 1,
                rotation: {
                    random: {
                        enable: false,
                        minimumValue: 0,
                    },
                    value: 45,
                },
                width: 1,
            },
            links: {
                blink: false,
                color: {
                    value: "random",
                },
                consent: false,
                distance: 100,
                enable: true,
                frequency: 1,
                opacity: 1,
                shadow: {
                    blur: 5,
                    color: {
                        value: "#000",
                    },
                    enable: false,
                },
                triangles: {
                    enable: false,
                    frequency: 1,
                },
                width: 1,
                warp: false,
            },
            repulse: {
                random: {
                    enable: false,
                    minimumValue: 0,
                },
                value: 0,
                enabled: false,
                distance: 1,
                duration: 1,
                factor: 1,
                speed: 1,
            },
        },
        responsive: [],
        smooth: false,
        themes: [],
        emitters: [],
        motion: {
            disable: false,
            reduce: {
                factor: 4,
                value: true,
            },
        },
        style: {
            position: "absolute",
        },
    };

    return (
        <Particles
            height="100px"
            id="tsparticles"
            init={particlesInit}
            loaded={particlesLoaded}
            options={option3}
        />
    );
};

export default ParticlesBackground;
