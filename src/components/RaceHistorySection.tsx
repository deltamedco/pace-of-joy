import { Trophy, MapPin } from "lucide-react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";

type Race = {
  date: string;
  year: number;
  type: string;
  race: string;
  location: string;
  time: string;
  pace: string;
  paceSeconds: number;
  pr: boolean;
  major: boolean;
};

const races: Race[] = [
  { date: "Oct 7, 2018", year: 2018, type: "Full Marathon", race: "BOA Chicago Marathon", location: "Chicago, IL", time: "5:03:01", pace: "11:34", paceSeconds: 694, pr: true, major: true },
  { date: "Sep 29, 2019", year: 2019, type: "Half Marathon", race: "LifeTime Chicago Half", location: "Chicago, IL", time: "1:56:21", pace: "8:53", paceSeconds: 533, pr: true, major: false },
  { date: "Sep 4, 2021", year: 2021, type: "Half Marathon", race: "Naperville Trails", location: "Naperville, IL", time: "1:54:59", pace: "8:47", paceSeconds: 527, pr: true, major: false },
  { date: "Sep 11, 2021", year: 2021, type: "Half Marathon", race: "ChiTown Half", location: "Chicago, IL", time: "1:53:34", pace: "8:40", paceSeconds: 520, pr: true, major: false },
  { date: "May 14, 2022", year: 2022, type: "Half Marathon", race: "Chicagoland Spring Marathon", location: "Schaumburg, IL", time: "2:01:21", pace: "9:16", paceSeconds: 556, pr: false, major: false },
  { date: "Jun 5, 2022", year: 2022, type: "Half Marathon", race: "BOA Chicago 13.1", location: "Chicago, IL", time: "2:32:12", pace: "11:37", paceSeconds: 697, pr: false, major: false },
  { date: "Sep 25, 2022", year: 2022, type: "Full Marathon", race: "BMW Berlin Marathon", location: "Berlin, Germany", time: "4:11:07", pace: "9:35", paceSeconds: 575, pr: true, major: true },
  { date: "Sep 17, 2023", year: 2023, type: "Full Marathon", race: "Fox Valley Marathon", location: "St. Charles, IL", time: "4:08:11", pace: "9:28", paceSeconds: 568, pr: true, major: false },
  { date: "Oct 8, 2023", year: 2023, type: "Full Marathon", race: "BOA Chicago Marathon", location: "Chicago, IL", time: "3:53:37", pace: "8:55", paceSeconds: 535, pr: true, major: true },
  { date: "Jan 7, 2024", year: 2024, type: "Full Marathon", race: "MG Vadodara Marathon", location: "Vadodara, India", time: "4:01:36", pace: "9:13", paceSeconds: 553, pr: false, major: false },
  { date: "Jun 4, 2024", year: 2024, type: "Half Marathon", race: "BOA Chicago 13.1", location: "Chicago, IL", time: "1:48:38", pace: "8:18", paceSeconds: 498, pr: true, major: false },
  { date: "Oct 13, 2024", year: 2024, type: "Full Marathon", race: "BOA Chicago Marathon", location: "Chicago, IL", time: "3:40:32", pace: "8:25", paceSeconds: 505, pr: true, major: true },
  { date: "Oct 26, 2024", year: 2024, type: "50K Ultra", race: "TCS Virtual NYC Marathon", location: "St. Charles, IL", time: "5:35:35", pace: "10:45", paceSeconds: 645, pr: false, major: false },
  { date: "Jun 1, 2025", year: 2025, type: "Half Marathon", race: "BOA Chicago 13.1", location: "Chicago, IL", time: "1:38:54", pace: "7:33", paceSeconds: 453, pr: true, major: false },
  { date: "Oct 12, 2025", year: 2025, type: "Full Marathon", race: "BOA Chicago Marathon", location: "Chicago, IL", time: "3:24:51", pace: "7:49", paceSeconds: 469, pr: true, major: true },
  { date: "Nov 2, 2025", year: 2025, type: "Full Marathon", race: "TCS New York City Marathon", location: "NYC, NY", time: "4:38:05", pace: "10:37", paceSeconds: 637, pr: false, major: true },
];

const fullMarathonProgression = races
  .filter((r) => r.type === "Full Marathon")
  .map((r) => ({ date: r.date, year: r.year, race: r.race, time: r.time, paceSeconds: r.paceSeconds }));

const halfMarathonProgression = races
  .filter((r) => r.type === "Half Marathon")
  .map((r) => ({ date: r.date, year: r.year, race: r.race, time: r.time, paceSeconds: r.paceSeconds }));

const formatPace = (seconds: number) => {
  const m = Math.floor(seconds / 60);
  const s = Math.round(seconds % 60);
  return `${m}:${s.toString().padStart(2, "0")}`;
};

const fullChartConfig = {
  paceSeconds: { label: "Pace", color: "hsl(var(--primary))" },
} satisfies ChartConfig;

const halfChartConfig = {
  paceSeconds: { label: "Pace", color: "hsl(var(--primary))" },
} satisfies ChartConfig;

const stats = [
  { label: "Total Races", value: races.length.toString() },
  { label: "Marathon PR", value: "3:24:51" },
  { label: "Half Marathon PR", value: "1:38:54" },
  { label: "World Majors", value: races.filter((r) => r.major).length.toString() },
];

const RaceHistorySection = () => {
  return (
    <section className="py-16 px-6 bg-secondary/30">
      <div className="container mx-auto max-w-5xl">
        <div className="text-center mb-12">
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-3">
            Race Experience & Progress
          </h2>
          <p className="text-muted-foreground text-lg">
            A record of every race, every PR, and the journey behind the times.
          </p>
        </div>

        {/* Stats grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="bg-card border border-border rounded-lg p-5 text-center"
            >
              <div className="font-heading text-2xl md:text-3xl font-bold text-primary mb-1">
                {stat.value}
              </div>
              <div className="text-sm text-muted-foreground uppercase tracking-wider">
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        {/* Marathon progression chart */}
        <div className="bg-card border border-border rounded-lg p-6 mb-8">
          <div className="flex items-center gap-2 mb-4">
            <TrendingDown className="w-5 h-5 text-primary" />
            <h3 className="font-heading text-xl font-bold text-foreground">
              Marathon Pace Progression
            </h3>
          </div>
          <p className="text-sm text-muted-foreground mb-4">
            From 11:34/mi in 2018 to 7:49/mi in 2025 — a 1:39 marathon time reduction.
          </p>
          <ChartContainer config={fullChartConfig} className="h-[260px] w-full">
            <LineChart data={fullMarathonProgression} margin={{ left: 0, right: 16, top: 8, bottom: 8 }}>
              <CartesianGrid strokeDasharray="3 3" className="stroke-border/40" />
              <XAxis
                dataKey="date"
                tick={{ fontSize: 11 }}
                tickFormatter={(v: string) => v.split(",")[1]?.trim() ?? v}
              />
              <YAxis
                domain={["dataMin - 30", "dataMax + 30"]}
                tickFormatter={formatPace}
                tick={{ fontSize: 11 }}
                reversed
                width={48}
                label={{ value: "Pace (min/mi)", angle: -90, position: "insideLeft", style: { fontSize: 11, fill: "hsl(var(--muted-foreground))" } }}
              />
              <ChartTooltip
                content={
                  <ChartTooltipContent
                    labelFormatter={(_, payload) => {
                      const p = payload?.[0]?.payload as typeof fullMarathonProgression[number] | undefined;
                      return p ? `${p.race} — ${p.date}` : "";
                    }}
                    formatter={(value, _name, _item, _i, payload) => {
                      const p = payload as unknown as typeof fullMarathonProgression[number];
                      return (
                        <div className="flex flex-col">
                          <span className="text-foreground font-medium">{p.time}</span>
                          <span className="text-muted-foreground text-xs">
                            {formatPace(value as number)}/mi
                          </span>
                        </div>
                      );
                    }}
                  />
                }
              />
              <Line
                type="monotone"
                dataKey="paceSeconds"
                stroke="hsl(var(--primary))"
                strokeWidth={2.5}
                dot={{ r: 4, fill: "hsl(var(--primary))" }}
                activeDot={{ r: 6 }}
              />
            </LineChart>
          </ChartContainer>
        </div>

        {/* Half marathon progression chart */}
        <div className="bg-card border border-border rounded-lg p-6 mb-8">
          <div className="flex items-center gap-2 mb-4">
            <TrendingDown className="w-5 h-5 text-primary" />
            <h3 className="font-heading text-xl font-bold text-foreground">
              Half Marathon Pace Progression
            </h3>
          </div>
          <p className="text-sm text-muted-foreground mb-4">
            From 8:53/mi in 2019 to a 7:33/mi PR in 2025.
          </p>
          <ChartContainer config={halfChartConfig} className="h-[240px] w-full">
            <LineChart data={halfMarathonProgression} margin={{ left: 0, right: 16, top: 8, bottom: 8 }}>
              <CartesianGrid strokeDasharray="3 3" className="stroke-border/40" />
              <XAxis
                dataKey="date"
                tick={{ fontSize: 11 }}
                tickFormatter={(v: string) => v.split(",")[1]?.trim() ?? v}
              />
              <YAxis
                domain={["dataMin - 20", "dataMax + 20"]}
                tickFormatter={formatPace}
                tick={{ fontSize: 11 }}
                reversed
                width={48}
              />
              <ChartTooltip
                content={
                  <ChartTooltipContent
                    labelFormatter={(_, payload) => {
                      const p = payload?.[0]?.payload as typeof halfMarathonProgression[number] | undefined;
                      return p ? `${p.race} — ${p.date}` : "";
                    }}
                    formatter={(value, _name, _item, _i, payload) => {
                      const p = payload as unknown as typeof halfMarathonProgression[number];
                      return (
                        <div className="flex flex-col">
                          <span className="text-foreground font-medium">{p.time}</span>
                          <span className="text-muted-foreground text-xs">
                            {formatPace(value as number)}/mi
                          </span>
                        </div>
                      );
                    }}
                  />
                }
              />
              <Line
                type="monotone"
                dataKey="paceSeconds"
                stroke="hsl(var(--primary))"
                strokeWidth={2.5}
                dot={{ r: 4, fill: "hsl(var(--primary))" }}
                activeDot={{ r: 6 }}
              />
            </LineChart>
          </ChartContainer>
        </div>

        {/* Race history table */}
        <div className="bg-card border border-border rounded-lg overflow-hidden">
          <div className="p-6 border-b border-border">
            <div className="flex items-center gap-2">
              <Trophy className="w-5 h-5 text-primary" />
              <h3 className="font-heading text-xl font-bold text-foreground">
                Complete Race History
              </h3>
            </div>
          </div>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="font-heading">Date</TableHead>
                <TableHead className="font-heading">Race</TableHead>
                <TableHead className="font-heading hidden md:table-cell">Type</TableHead>
                <TableHead className="font-heading hidden lg:table-cell">Location</TableHead>
                <TableHead className="font-heading text-right">Time</TableHead>
                <TableHead className="font-heading text-right hidden sm:table-cell">Pace</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {[...races].reverse().map((race, i) => (
                <TableRow key={`${race.date}-${i}`}>
                  <TableCell className="text-muted-foreground whitespace-nowrap text-sm">
                    {race.date}
                  </TableCell>
                  <TableCell>
                    <div className="flex flex-wrap items-center gap-2">
                      <span className="font-medium text-foreground">{race.race}</span>
                      {race.pr && (
                        <Badge className="bg-primary text-primary-foreground hover:bg-primary text-xs">
                          PR
                        </Badge>
                      )}
                      {race.major && (
                        <Badge variant="outline" className="text-xs border-primary/40 text-primary">
                          Major
                        </Badge>
                      )}
                    </div>
                    <div className="text-xs text-muted-foreground mt-1 lg:hidden flex items-center gap-1">
                      <MapPin className="w-3 h-3" />
                      {race.location}
                    </div>
                  </TableCell>
                  <TableCell className="hidden md:table-cell text-muted-foreground text-sm">
                    {race.type}
                  </TableCell>
                  <TableCell className="hidden lg:table-cell text-muted-foreground text-sm">
                    {race.location}
                  </TableCell>
                  <TableCell className="text-right font-mono font-medium text-foreground">
                    {race.time}
                  </TableCell>
                  <TableCell className="text-right hidden sm:table-cell font-mono text-muted-foreground text-sm">
                    {race.pace}/mi
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </div>
    </section>
  );
};

export default RaceHistorySection;
