import ReveiwsList from "@/components/ReviewsList";

export default function ReveiwsPage() {
  return (
    <div className="container">
      <div className="h-screen flex flex-col items-center justify-center">
        <h1 className="text-black text-[48px] font-bold mb-[60px]">
          Voices of Success with Sales Fortuna
        </h1>
        <ReveiwsList />
      </div>
    </div>
  );
}
