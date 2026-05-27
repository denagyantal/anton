'use client';

type ScheduleEvent = {
  id: string;
  title: string;
  startTime: string;
  endTime: string;
  allDay: boolean;
  jobStatus: string | null;
  customerName: string | null;
  assignedToName: string | null;
};

const STATUS_COLORS: Record<string, string> = {
  SCHEDULED: 'bg-blue-100 text-blue-800',
  IN_PROGRESS: 'bg-yellow-100 text-yellow-800',
  COMPLETE: 'bg-green-100 text-green-800',
  INVOICED: 'bg-gray-100 text-gray-700',
  QUOTED: 'bg-purple-100 text-purple-800',
};

function formatTime(iso: string): string {
  return new Date(iso).toLocaleTimeString('en-US', {
    hour: 'numeric',
    minute: '2-digit',
    hour12: true,
  });
}

interface ScheduleCalendarProps {
  events: ScheduleEvent[];
  date: string;
}

export default function ScheduleCalendar({ events, date }: ScheduleCalendarProps) {
  const grouped = events.reduce<Record<string, ScheduleEvent[]>>((acc, event) => {
    const key = event.assignedToName ?? 'Unassigned';
    if (!acc[key]) acc[key] = [];
    acc[key]!.push(event);
    return acc;
  }, {});

  const sortedGroups = Object.entries(grouped).sort(([a], [b]) => {
    if (a === 'Unassigned') return 1;
    if (b === 'Unassigned') return -1;
    return a.localeCompare(b);
  });

  if (events.length === 0) {
    return (
      <div className="text-center py-16 text-gray-400">
        <p className="text-lg font-medium">No events scheduled</p>
        <p className="text-sm mt-1">
          {new Date(date + 'T12:00:00').toLocaleDateString('en-US', {
            weekday: 'long',
            month: 'long',
            day: 'numeric',
          })}
        </p>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {sortedGroups.map(([techName, techEvents]) => (
        <div key={techName}>
          <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-3">
            {techName}
            <span className="ml-2 font-normal normal-case">
              — {techEvents.length} job{techEvents.length !== 1 ? 's' : ''}
            </span>
          </h3>
          <div className="space-y-2">
            {techEvents.map((event) => (
              <div
                key={event.id}
                className="bg-white border border-gray-200 rounded-lg px-4 py-3 flex items-start gap-4"
              >
                <div className="min-w-[80px] text-sm text-gray-500">
                  {event.allDay ? (
                    <span>All day</span>
                  ) : (
                    <>
                      <p>{formatTime(event.startTime)}</p>
                      <p className="text-xs">{formatTime(event.endTime)}</p>
                    </>
                  )}
                </div>
                <div className="flex-1">
                  <p className="font-medium text-gray-900 text-sm">{event.title}</p>
                  {event.customerName && (
                    <p className="text-xs text-gray-500 mt-0.5">{event.customerName}</p>
                  )}
                </div>
                {event.jobStatus && (
                  <span
                    className={`text-xs font-medium px-2 py-1 rounded-full ${
                      STATUS_COLORS[event.jobStatus] ?? 'bg-gray-100 text-gray-600'
                    }`}
                  >
                    {event.jobStatus.replace('_', ' ')}
                  </span>
                )}
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
