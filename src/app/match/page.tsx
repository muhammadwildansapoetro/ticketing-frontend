import MatchList from "@/components/matchPage/matchList";
import MobileMatchFilter from "@/components/matchPage/mobileMatchFilter";

export default function MatchesPage() {
  return (
    <div>
      <MobileMatchFilter />
      <MatchList />
    </div>
  );
}
