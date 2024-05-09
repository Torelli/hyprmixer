import { faAdd, faCaretDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Settings() {
	return <div className="mt-16 pb-8 flex flex-col justify-between w-full h-full overflow-y-scroll">
		<ul className="overflow-y-auto w-full">
			<li className="relative flex pl-4 sm:pl-7 sm:pr-20 py-2 sm:gap-4 items-end w-full">
				<span className="min-w-16 sm:min-w-32">Theme</span>
				<div className="block text-center py-2.5 px-0 w-full text-sm text-white bg-transparent border-0 border-b-2 appearance-none border-slate-700 focus:outline-none focus:ring-0 focus:border-slate-200 hover:bg-[rgba(36,40,59,0.4)] peer">
					Coming soon
				</div>
				<FontAwesomeIcon className="absolute right-14 sm:right-24 bottom-6" icon={faCaretDown} />
			</li>
			<li className="relative flex px-4 sm:px-7 py-2 sm:gap-4 items-end w-full">
				<span className="min-w-16 sm:min-w-32">Players ignored</span>
				<div className="block text-center py-2.5 px-0 w-full text-sm text-white bg-transparent border-0 border-b-2 appearance-none border-slate-700 focus:outline-none focus:ring-0 focus:border-slate-200 hover:bg-[rgba(36,40,59,0.4)] peer">
					Coming soon
				</div>
				<FontAwesomeIcon className="absolute right-16 sm:right-24 bottom-6" icon={faCaretDown} />
				<FontAwesomeIcon className="text-sm ms-2 sm:ms-0 sm:text-base cursor-pointer p-3 hover:bg-[rgba(36,40,59)] transition-all rounded-full" icon={faAdd} />

			</li>
		</ul>
		<div className="pl-3 pr-20 py-2 gap-4 border-t border-t-slate-400 items-center w-full text-slate-400 text-sm">
			Developed by <a className="text-slate-300 hover:underline font-bold" href="https://github.com/torelli" target="_blank">Giovanni Torelli</a>
		</div>
	</div >
}
