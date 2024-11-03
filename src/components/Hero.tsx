import { Gift, Calendar, Users } from 'lucide-react';

export default function Hero() {
  return (
    <div className="relative bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="relative z-10 pb-8 bg-white sm:pb-16 md:pb-20 lg:pb-28 xl:pb-32">
          <main className="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 xl:mt-28">
            <div className="text-center">
              <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
                <span className="block">Create Memorable</span>
                <span className="block text-indigo-600">Gift Experiences</span>
              </h1>
              <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl">
                The perfect platform for managing your event gifts. Create registries, send invitations, and track RSVPs all in one place.
              </p>
              <div className="mt-5 sm:mt-8 sm:flex sm:justify-center">
                <div className="rounded-md shadow">
                  <a href="#create" className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 md:py-4 md:text-lg md:px-10">
                    Create Registry
                  </a>
                </div>
                <div className="mt-3 sm:mt-0 sm:ml-3">
                  <a href="#browse" className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-indigo-600 bg-indigo-100 hover:bg-indigo-200 md:py-4 md:text-lg md:px-10">
                    Browse Events
                  </a>
                </div>
              </div>
            </div>

            <div className="mt-20">
              <div className="grid grid-cols-1 gap-8 sm:grid-cols-3">
                <div className="text-center">
                  <div className="flex justify-center">
                    <Gift className="h-12 w-12 text-indigo-600" />
                  </div>
                  <h3 className="mt-4 text-lg font-medium text-gray-900">Multi-store Registry</h3>
                  <p className="mt-2 text-base text-gray-500">Add gifts from any store or create custom gift requests</p>
                </div>
                <div className="text-center">
                  <div className="flex justify-center">
                    <Calendar className="h-12 w-12 text-indigo-600" />
                  </div>
                  <h3 className="mt-4 text-lg font-medium text-gray-900">Event Management</h3>
                  <p className="mt-2 text-base text-gray-500">Manage RSVPs, send updates, and track thank you notes</p>
                </div>
                <div className="text-center">
                  <div className="flex justify-center">
                    <Users className="h-12 w-12 text-indigo-600" />
                  </div>
                  <h3 className="mt-4 text-lg font-medium text-gray-900">Group Gifting</h3>
                  <p className="mt-2 text-base text-gray-500">Enable guests to contribute together for larger gifts</p>
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}