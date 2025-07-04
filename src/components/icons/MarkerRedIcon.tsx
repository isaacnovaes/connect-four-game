const MarkerRedIcon = () => {
    return (
        <svg
            height='36'
            width='38'
            xmlns='http://www.w3.org/2000/svg'
            xmlnsXlink='http://www.w3.org/1999/xlink'
        >
            <defs>
                <filter
                    filterUnits='objectBoundingBox'
                    height='156.8%'
                    id='a'
                    width='134.4%'
                    x='-17.2%'
                    y='-16.4%'
                >
                    <feMorphology
                        in='SourceAlpha'
                        operator='dilate'
                        radius='3'
                        result='shadowSpreadOuter1'
                    />
                    <feOffset dy='5' in='shadowSpreadOuter1' result='shadowOffsetOuter1' />
                    <feComposite
                        in='shadowOffsetOuter1'
                        in2='SourceAlpha'
                        operator='out'
                        result='shadowOffsetOuter1'
                    />
                    <feColorMatrix
                        in='shadowOffsetOuter1'
                        values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 1 0'
                    />
                </filter>
                <path
                    d='m882.01 132.377 10.932-8.157a5 5 0 0 1 5.96-.015l11.068 8.172A5 5 0 0 1 912 136.4v6.6a5 5 0 0 1-5 5h-22a5 5 0 0 1-5-5v-6.616a5 5 0 0 1 2.01-4.007Z'
                    id='b'
                />
            </defs>
            <g fill='none' fillRule='evenodd' transform='matrix(1 0 0 -1 -877 156)'>
                <use fill='#000' filter='url(#a)' xlinkHref='#b' />
                <path
                    d='M895.916 121.727a6.49 6.49 0 0 1 3.877 1.271l11.068 8.173a6.5 6.5 0 0 1 2.639 5.229v6.6a6.48 6.48 0 0 1-1.904 4.596A6.48 6.48 0 0 1 907 149.5h-22a6.48 6.48 0 0 1-4.596-1.904A6.48 6.48 0 0 1 878.5 143v-6.616a6.5 6.5 0 0 1 2.613-5.21l10.932-8.157a6.49 6.49 0 0 1 3.87-1.29Z'
                    fill='#FD6687'
                    stroke='#000'
                    strokeWidth='3'
                />
            </g>
        </svg>
    );
};
export default MarkerRedIcon;
