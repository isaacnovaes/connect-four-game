const CounterYellowLarge = () => {
    return (
        <svg
            height='75px'
            version='1.1'
            viewBox='0 0 70 75'
            width='70px'
            xmlns='http://www.w3.org/2000/svg'
            xmlnsXlink='http://www.w3.org/1999/xlink'
        >
            <title>counter-yellow-large</title>
            <defs>
                <circle cx='35' cy='35' id='path-1' r='32' />
                <filter
                    filterUnits='objectBoundingBox'
                    height='107.8%'
                    id='filter-2'
                    width='107.8%'
                    x='-3.9%'
                    y='-3.9%'
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
                <g id='counter-yellow-large'>
                    <circle cx='35' cy='35' fill='#000000' id='Oval-Copy-35' r='35' />
                    <circle cx='35' cy='40' fill='#000000' id='Oval-Copy-36' r='35' />
                    <g id='Oval-Copy-35'>
                        <use fill='#FFCE67' fillRule='evenodd' xlinkHref='#path-1' />
                        <use
                            fill='black'
                            fillOpacity='1'
                            filter='url(#filter-2)'
                            xlinkHref='#path-1'
                        />
                    </g>
                </g>
            </g>
        </svg>
    );
};
export default CounterYellowLarge;
