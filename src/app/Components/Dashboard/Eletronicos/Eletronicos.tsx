import "./Eletronicos.css";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const Eletronicos = () => {
  const recentSales = [
    {
      name: "Leonardo Botelho",
      email: "olivia.martin@email.com",
      amount: "+$1,999.00",
    },
    {
      name: "Jackson Lee",
      email: "jackson.lee@email.com",
      amount: "+$39.00",
    },
    {
      name: "Isabella Nguyen",
      email: "isabella.nguyen@email.com",
      amount: "+$299.00",
    },
    {
      name: "William Kim",
      email: "will@email.com",
      amount: "+$99.00",
    },
    {
      name: "Sofia Davis",
      email: "sofia.davis@email.com",
      amount: "+$39.00",
    },
  ];

  return (
    <Card className="eletronicos_card">
      <CardHeader>
        <CardTitle>Recent Sales</CardTitle>
        <CardDescription>You made 265 sales this month.</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-8">
          {recentSales.map((sale) => (
            <div key={sale.email} className="flex items-center">
              <Avatar className="h-9 w-9">
                <AvatarImage
                  src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${sale.name}`}
                />
                <AvatarFallback>{sale.name[0]}</AvatarFallback>
              </Avatar>
              <div className="ml-4 space-y-1">
                <p className="text-sm font-medium leading-none">{sale.name}</p>
                <p className="text-sm text-muted-foreground">{sale.email}</p>
              </div>
              <div className="ml-auto font-medium">{sale.amount}</div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default Eletronicos;
