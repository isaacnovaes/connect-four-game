const CounterRedSmall = () => {
    return (
        <svg
            height='46px'
            version='1.1'
            viewBox='0 0 41 46'
            width='41px'
            xmlns='http://www.w3.org/2000/svg'
            xmlnsXlink='http://www.w3.org/1999/xlink'
        >
            <title>counter-red-small</title>
            <defs>
                <circle cx='19.9756098' cy='19.9756098' id='path-1' r='16.9756098' />
                <filter
                    filterUnits='objectBoundingBox'
                    height='114.7%'
                    id='filter-2'
                    width='114.7%'
                    x='-7.4%'
                    y='-7.4%'
                >
                    <feOffset dx='0' dy='5' in='SourceAlpha' result='shadowOffsetInner1' />
                    <feComposite
                        in='shadowOffsetInner1'
                        in2='SourceAlpha'
                        k2='-1'
                        k3='1'
                        operator='arithmetic'
                        result='shadowInnerInner1'
                    />
                    <feColorMatrix
                        in='shadowInnerInner1'
                        type='matrix'
                        values='0 0 0 0 0   0 0 0 0 0   0 0 0 0 0  0 0 0 0.5 0'
                    />
                </filter>
            </defs>
            <g fill='none' fillRule='evenodd' id='Designs' stroke='none' strokeWidth='1'>
                <g id='assets' transform='translate(-231.000000, -744.000000)'>
                    <g id='Group-24' transform='translate(211.000000, 160.000000)'>
                        <g id='counter-red-small' transform='translate(20.975610, 584.975610)'>
                            <circle cx='20' cy='20' fill='#000000' id='Oval-Copy-49' r='20' />
                            <circle cx='20' cy='25' fill='#000000' id='Oval-Copy-50' r='20' />
                            <g id='Oval-Copy-48'>
                                <use fill='#FD6687' fillRule='evenodd' xlinkHref='#path-1' />
                                <use
                                    fill='black'
                                    fillOpacity='1'
                                    filter='url(#filter-2)'
                                    xlinkHref='#path-1'
                                />
                            </g>
                        </g>
                    </g>
                </g>
            </g>
        </svg>
    );
};
export default CounterRedSmall;
