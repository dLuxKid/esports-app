
export default function Loader({ mode }: { mode?: 'light' }) {
    return (
        <div className={`w-5 h-5 rounded-full border-2 border-pry-grey mx-auto ${mode === 'light' ? 'border-t-slate-700' : 'border-t-transparent'} animate-spin`}></div>
    )
}
