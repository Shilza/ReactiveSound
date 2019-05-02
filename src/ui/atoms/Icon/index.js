import React from "react";

const getIconPath = name => {
    switch (name) {
        case 'soundcloud':
            return (
                <path d="M3.361,67.281L5,60.279l-1.639-7.238c-0.045-0.215-0.457-0.379-0.959-0.379
                    c-0.508,0-0.92,0.164-0.959,0.381L0,60.279l1.443,7.002c0.039,0.217,0.451,0.381,0.959,0.381
                    C2.904,67.662,3.316,67.498,3.361,67.281z
                    M13.611,71.168L15,60.348l-1.389-16.74c-0.041-0.426-0.561-0.76-1.191-0.76
                    c-0.635,0-1.156,0.334-1.188,0.76L10,60.348l1.232,10.82c0.031,0.422,0.553,0.756,1.188,0.756
                    C13.051,71.924,13.57,71.594,13.611,71.168z
                    M23.84,70.99L25,60.354l-1.16-22.287c-0.031-0.523-0.648-0.934-1.404-0.934
                    c-0.762,0-1.379,0.41-1.406,0.934L20,60.354l1.029,10.642c0.027,0.519,0.645,0.928,1.406,0.928
                    C23.191,71.922,23.809,71.514,23.84,70.99z
                    M34.049,70.832L35,60.355l-0.951-22.449c-0.023-0.621-0.727-1.107-1.6-1.107
                    c-0.879,0-1.582,0.486-1.604,1.107L30,60.355l0.85,10.475c0.018,0.615,0.721,1.102,1.6,1.102
                    C33.322,71.932,34.025,71.453,34.049,70.832z
                    M44.248,70.699L45,60.359l-0.752-25.74c-0.016-0.707-0.818-1.281-1.787-1.281
                    c-0.971,0-1.771,0.576-1.787,1.281L40,60.352c0,0.017,0.674,10.349,0.674,10.349c0.016,0.698,0.816,1.272,1.787,1.272
                    C43.43,71.973,44.232,71.406,44.248,70.699z
                    M51.391,71.98C51.424,71.982,86.883,72,87.114,72C94.232,72,100,66.42,100,59.537
                    c0-6.885-5.768-12.465-12.887-12.465c-1.766,0-3.449,0.348-4.984,0.969C81.104,36.811,71.363,28,59.484,28
                    c-2.906,0-5.742,0.553-8.244,1.488c-0.972,0.366-1.232,0.739-1.24,1.467v39.553C50.01,71.27,50.621,71.906,51.391,71.98z"
                />
            );
        case 'search':
            return (
                <path d="M447.05,428l-109.6-109.6c29.4-33.8,47.2-77.9,47.2-126.1C384.65,86.2,298.35,0,192.35,0C86.25,0,0.05,86.3,0.05,192.3
                    s86.3,192.3,192.3,192.3c48.2,0,92.3-17.8,126.1-47.2L428.05,447c2.6,2.6,6.1,4,9.5,4s6.9-1.3,9.5-4
                    C452.25,441.8,452.25,433.2,447.05,428z
                    M26.95,192.3c0-91.2,74.2-165.3,165.3-165.3c91.2,0,165.3,74.2,165.3,165.3
                    s-74.1,165.4-165.3,165.4C101.15,357.7,26.95,283.5,26.95,192.3z"
                />
            );
        case 'github':
            return (
                <path d="M409.132,114.573c-19.608-33.596-46.205-60.194-79.798-79.8C295.736,15.166,259.057,5.365,219.271,5.365
                    c-39.781,0-76.472,9.804-110.063,29.408c-33.596,19.605-60.192,46.204-79.8,79.8C9.803,148.168,0,184.854,0,224.63
                    c0,47.78,13.94,90.745,41.827,128.906c27.884,38.164,63.906,64.572,108.063,79.227c5.14,0.954,8.945,0.283,11.419-1.996
                    c2.475-2.282,3.711-5.14,3.711-8.562c0-0.571-0.049-5.708-0.144-15.417c-0.098-9.709-0.144-18.179-0.144-25.406l-6.567,1.136
                    c-4.187,0.767-9.469,1.092-15.846,1c-6.374-0.089-12.991-0.757-19.842-1.999c-6.854-1.231-13.229-4.086-19.13-8.559
                    c-5.898-4.473-10.085-10.328-12.56-17.556l-2.855-6.57c-1.903-4.374-4.899-9.233-8.992-14.559
                    c-4.093-5.331-8.232-8.945-12.419-10.848l-1.999-1.431c-1.332-0.951-2.568-2.098-3.711-3.429c-1.142-1.331-1.997-2.663-2.568-3.997
                    c-0.572-1.335-0.098-2.43,1.427-3.289c1.525-0.859,4.281-1.276,8.28-1.276l5.708,0.853c3.807,0.763,8.516,3.042,14.133,6.851
                    c5.614,3.806,10.229,8.754,13.846,14.842c4.38,7.806,9.657,13.754,15.846,17.847c6.184,4.093,12.419,6.136,18.699,6.136
                    c6.28,0,11.704-0.476,16.274-1.423c4.565-0.952,8.848-2.383,12.847-4.285c1.713-12.758,6.377-22.559,13.988-29.41
                    c-10.848-1.14-20.601-2.857-29.264-5.14c-8.658-2.286-17.605-5.996-26.835-11.14c-9.235-5.137-16.896-11.516-22.985-19.126
                    c-6.09-7.614-11.088-17.61-14.987-29.979c-3.901-12.374-5.852-26.648-5.852-42.826c0-23.035,7.52-42.637,22.557-58.817
                    c-7.044-17.318-6.379-36.732,1.997-58.24c5.52-1.715,13.706-0.428,24.554,3.853c10.85,4.283,18.794,7.952,23.84,10.994
                    c5.046,3.041,9.089,5.618,12.135,7.708c17.705-4.947,35.976-7.421,54.818-7.421s37.117,2.474,54.823,7.421l10.849-6.849
                    c7.419-4.57,16.18-8.758,26.262-12.565c10.088-3.805,17.802-4.853,23.134-3.138c8.562,21.509,9.325,40.922,2.279,58.24
                    c15.036,16.18,22.559,35.787,22.559,58.817c0,16.178-1.958,30.497-5.853,42.966c-3.9,12.471-8.941,22.457-15.125,29.979
                    c-6.191,7.521-13.901,13.85-23.131,18.986c-9.232,5.14-18.182,8.85-26.84,11.136c-8.662,2.286-18.415,4.004-29.263,5.146
                    c9.894,8.562,14.842,22.077,14.842,40.539v60.237c0,3.422,1.19,6.279,3.572,8.562c2.379,2.279,6.136,2.95,11.276,1.995
                    c44.163-14.653,80.185-41.062,108.068-79.226c27.88-38.161,41.825-81.126,41.825-128.906
                    C438.536,184.851,428.728,148.168,409.132,114.573z"
                />
            );
        case 'play':
            return (
                <path d="M415.934,212.799L36.788,2.097C32.411-0.377,28.65-0.661,25.51,1.242c-3.14,1.902-4.708,5.328-4.708,10.276V431.78
            c0,4.952,1.569,8.381,4.708,10.284c3.14,1.902,6.901,1.622,11.278-0.855l379.146-210.703c4.381-2.478,6.571-5.434,6.571-8.856
            C422.505,218.224,420.314,215.274,415.934,212.799z"
                />
            );
        case 'pause':
            return <path d="M25.5,357h102V0h-102V357z M229.5,0v357h102V0H229.5z"/>;
        case 'chain':
            return (
                <>
                    <path d="M312.453,199.601c-6.066-6.102-12.792-11.511-20.053-16.128c-19.232-12.315-41.59-18.859-64.427-18.859
			c-31.697-0.059-62.106,12.535-84.48,34.987L34.949,308.23c-22.336,22.379-34.89,52.7-34.91,84.318
			c-0.042,65.98,53.41,119.501,119.39,119.543c31.648,0.11,62.029-12.424,84.395-34.816l89.6-89.6
			c1.628-1.614,2.537-3.816,2.524-6.108c-0.027-4.713-3.87-8.511-8.583-8.484h-3.413c-18.72,0.066-37.273-3.529-54.613-10.581
			c-3.195-1.315-6.867-0.573-9.301,1.877l-64.427,64.512c-20.006,20.006-52.442,20.006-72.448,0
			c-20.006-20.006-20.006-52.442,0-72.448l108.971-108.885c19.99-19.965,52.373-19.965,72.363,0
			c13.472,12.679,34.486,12.679,47.957,0c5.796-5.801,9.31-13.495,9.899-21.675C322.976,216.108,319.371,206.535,312.453,199.601z"
                    />
                    <path d="M477.061,34.993c-46.657-46.657-122.303-46.657-168.96,0l-89.515,89.429c-2.458,2.47-3.167,6.185-1.792,9.387
            c1.359,3.211,4.535,5.272,8.021,5.205h3.157c18.698-0.034,37.221,3.589,54.528,10.667c3.195,1.315,6.867,0.573,9.301-1.877
            l64.256-64.171c20.006-20.006,52.442-20.006,72.448,0c20.006,20.006,20.006,52.442,0,72.448l-80.043,79.957l-0.683,0.768
            l-27.989,27.819c-19.99,19.965-52.373,19.965-72.363,0c-13.472-12.679-34.486-12.679-47.957,0
            c-5.833,5.845-9.35,13.606-9.899,21.845c-0.624,9.775,2.981,19.348,9.899,26.283c9.877,9.919,21.433,18.008,34.133,23.893
            c1.792,0.853,3.584,1.536,5.376,2.304c1.792,0.768,3.669,1.365,5.461,2.048c1.792,0.683,3.669,1.28,5.461,1.792l5.035,1.365
            c3.413,0.853,6.827,1.536,10.325,2.133c4.214,0.626,8.458,1.025,12.715,1.195h5.973h0.512l5.12-0.597
            c1.877-0.085,3.84-0.512,6.059-0.512h2.901l5.888-0.853l2.731-0.512l4.949-1.024h0.939c20.961-5.265,40.101-16.118,55.381-31.403
            l108.629-108.629C523.718,157.296,523.718,81.65,477.061,34.993z"/>
                </>
            );
        case 'next':
            return <path d="M0,306l216.75-153L0,0V306z M255,0v306h51V0H255z"/>;
        case 'previous':
            return (
                <g>
                    <rect width="51" height="306"/>
                    <polygon points="89.25,153 306,306 306,0 "/>
                </g>
            );
        case 'headphones':
            return (
                <>
                    <path d="M62.743,155.437v98.42c0,5.867,4.741,10.605,10.605,10.605c5.854,0,10.605-4.738,10.605-10.605v-98.42
			c0-5.856-4.751-10.605-10.605-10.605C67.484,144.832,62.743,149.576,62.743,155.437z"/>
                    <path d="M29.456,264.582h23.351v-116.85c0.064-0.56,0.166-1.119,0.166-1.693c0-50.412,40.69-91.42,90.698-91.42
			c50.002,0,90.692,41.008,90.692,91.42c0,0.771,0.113,1.518,0.228,2.263v116.28h23.354c16.254,0,29.442-13.64,29.442-30.469
			v-60.936c0-13.878-8.989-25.57-21.261-29.249c-1.129-66.971-55.608-121.124-122.45-121.124
			c-66.86,0-121.347,54.158-122.465,121.15C8.956,147.638,0,159.32,0,173.187v60.926C0,250.932,13.187,264.582,29.456,264.582z"/>
                    <path d="M203.454,155.437v98.42c0,5.867,4.748,10.605,10.604,10.605s10.604-4.738,10.604-10.605v-98.42
			c0-5.856-4.748-10.605-10.604-10.605C208.191,144.832,203.454,149.576,203.454,155.437z"/>
                </>
            );
        case 'like':
            return (
                <path d="M51.911,16.242C51.152,7.888,45.239,1.827,37.839,1.827c-4.93,0-9.444,2.653-11.984,6.905
		c-2.517-4.307-6.846-6.906-11.697-6.906c-7.399,0-13.313,6.061-14.071,14.415c-0.06,0.369-0.306,2.311,0.442,5.478
		c1.078,4.568,3.568,8.723,7.199,12.013l18.115,16.439l18.426-16.438c3.631-3.291,6.121-7.445,7.199-12.014
		C52.216,18.553,51.97,16.611,51.911,16.242z M49.521,21.261c-0.984,4.172-3.265,7.973-6.59,10.985L25.855,47.481L9.072,32.25
		c-3.331-3.018-5.611-6.818-6.596-10.99c-0.708-2.997-0.417-4.69-0.416-4.701l0.015-0.101C2.725,9.139,7.806,3.826,14.158,3.826
		c4.687,0,8.813,2.88,10.771,7.515l0.921,2.183l0.921-2.183c1.927-4.564,6.271-7.514,11.069-7.514
		c6.351,0,11.433,5.313,12.096,12.727C49.938,16.57,50.229,18.264,49.521,21.261z"/>
            );
        default:
            return <path/>
    }
};

export const Icon = ({
                         name = '',
                         width = '1em',
                         height = '1em',
                         style = {},
                         fill = '#7f8081',
                         viewBox = '0 0 300 300',
                         ...props
                     }) => (
    <svg
        width={width}
        height={height}
        style={style}
        viewBox={viewBox}
        focusable='false'
        role='img'
        fill={fill}
        {...props}
        xmlns='http://www.w3.org/2000/svg'
    >
        {getIconPath(name)}
    </svg>
);