function App() {
    return (
        <div className='grid h-dvh place-items-center bg-slate-200'>
            <button
                className='animate-bounce cursor-pointer rounded-sm bg-indigo-300 p-2 ring-1 ring-indigo-500 hover:text-gray-50'
                popoverTarget='popover'
                type='button'
            >
                Hello world
            </button>
            <div className='m-auto' id='popover' popover='auto'>
                <p>Popover content</p>
            </div>
        </div>
    );
}

export default App;
