import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";
import { useState } from "react";

const Index = () => {
  const [activeCategory, setActiveCategory] = useState("all");

  const products = [
    {
      id: 1,
      name: "NeoTech VR Headset",
      price: 49999,
      category: "vr",
      image: "https://cdn.poehali.dev/projects/f857ee3a-218a-4da8-be6d-2f7920f1a095/files/3b4ec520-1e6e-4aab-94cb-f06c416c29a7.jpg",
      badge: "NEW"
    },
    {
      id: 2,
      name: "Quantum Smartwatch Pro",
      price: 24999,
      category: "wearable",
      image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30",
      badge: "TOP"
    },
    {
      id: 3,
      name: "AirPods Cyber Edition",
      price: 14999,
      category: "audio",
      image: "https://images.unsplash.com/photo-1572569511254-d8f925fe2cbb",
      badge: "SALE"
    },
    {
      id: 4,
      name: "HoloPhone X1",
      price: 89999,
      category: "phone",
      image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9",
      badge: "PRO"
    },
    {
      id: 5,
      name: "Neural Keyboard RGB",
      price: 9999,
      category: "accessories",
      image: "https://images.unsplash.com/photo-1587829741301-dc798b83add3",
    },
    {
      id: 6,
      name: "Cyber Mouse Elite",
      price: 5999,
      category: "accessories",
      image: "https://images.unsplash.com/photo-1527864550417-7fd91fc51a46",
    }
  ];

  const categories = [
    { id: "all", name: "Все товары", icon: "Grid3x3" },
    { id: "vr", name: "VR & AR", icon: "Glasses" },
    { id: "wearable", name: "Носимые", icon: "Watch" },
    { id: "audio", name: "Аудио", icon: "Headphones" },
    { id: "phone", name: "Смартфоны", icon: "Smartphone" },
    { id: "accessories", name: "Аксессуары", icon: "Usb" }
  ];

  const filteredProducts = activeCategory === "all" 
    ? products 
    : products.filter(p => p.category === activeCategory);

  return (
    <div className="min-h-screen bg-background">
      <nav className="border-b border-border/50 backdrop-blur-sm sticky top-0 z-50 bg-background/80">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-primary to-secondary flex items-center justify-center glow-border">
              <Icon name="Zap" size={24} className="text-background" />
            </div>
            <h1 className="text-2xl font-bold glow-text text-primary">CYBERSTORE</h1>
          </div>
          <div className="flex items-center gap-4">
            <Button variant="ghost" size="icon">
              <Icon name="Search" size={20} />
            </Button>
            <Button variant="ghost" size="icon">
              <Icon name="User" size={20} />
            </Button>
            <Button variant="ghost" size="icon" className="relative">
              <Icon name="ShoppingCart" size={20} />
              <span className="absolute -top-1 -right-1 bg-secondary text-xs rounded-full w-5 h-5 flex items-center justify-center glow-border-purple">3</span>
            </Button>
          </div>
        </div>
      </nav>

      <section className="relative overflow-hidden py-20 md:py-32">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/10 via-transparent to-secondary/10"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center animate-fade-in">
            <Badge className="mb-4 bg-primary/20 text-primary border-primary/50 glow-border">
              Технологии будущего уже здесь
            </Badge>
            <h2 className="text-5xl md:text-7xl font-bold mb-6 glow-text">
              Новая эра
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-primary via-secondary to-primary">
                цифровых технологий
              </span>
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              Откройте для себя инновационные гаджеты, которые изменят ваше будущее
            </p>
            <div className="flex gap-4 justify-center">
              <Button size="lg" className="bg-primary hover:bg-primary/90 glow-border group">
                <Icon name="Rocket" size={20} className="mr-2 group-hover:animate-pulse" />
                Начать покупки
              </Button>
              <Button size="lg" variant="outline" className="border-primary/50 hover:bg-primary/10">
                Узнать больше
                <Icon name="ArrowRight" size={20} className="ml-2" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 border-t border-border/50">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap gap-3 justify-center animate-slide-in-left">
            {categories.map((cat) => (
              <Button
                key={cat.id}
                variant={activeCategory === cat.id ? "default" : "outline"}
                className={`gap-2 ${activeCategory === cat.id ? 'bg-primary glow-border' : 'border-border/50 hover:border-primary/50'}`}
                onClick={() => setActiveCategory(cat.id)}
              >
                <Icon name={cat.icon as any} size={18} />
                {cat.name}
              </Button>
            ))}
          </div>
        </div>
      </section>

      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProducts.map((product, index) => (
              <Card 
                key={product.id} 
                className="border-border/50 hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/20 group overflow-hidden animate-fade-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CardHeader className="p-0">
                  <div className="relative overflow-hidden">
                    <img 
                      src={product.image} 
                      alt={product.name}
                      className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    {product.badge && (
                      <Badge className="absolute top-4 right-4 bg-secondary glow-border-purple">
                        {product.badge}
                      </Badge>
                    )}
                  </div>
                </CardHeader>
                <CardContent className="p-6">
                  <CardTitle className="text-xl mb-2 group-hover:text-primary transition-colors">
                    {product.name}
                  </CardTitle>
                  <CardDescription className="text-2xl font-bold text-primary glow-text">
                    {product.price.toLocaleString('ru-RU')} ₽
                  </CardDescription>
                </CardContent>
                <CardFooter className="p-6 pt-0 flex gap-2">
                  <Button className="flex-1 bg-primary hover:bg-primary/90 glow-border">
                    <Icon name="ShoppingCart" size={18} className="mr-2" />
                    В корзину
                  </Button>
                  <Button variant="outline" size="icon" className="border-border/50 hover:border-primary/50">
                    <Icon name="Heart" size={18} />
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-card/50 border-t border-border/50">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-6 rounded-lg border border-border/50 hover:border-primary/50 transition-all hover:shadow-lg hover:shadow-primary/20">
              <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center mx-auto mb-4 glow-border">
                <Icon name="Truck" size={32} className="text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-2">Быстрая доставка</h3>
              <p className="text-muted-foreground">Доставим в течение 24 часов по всей России</p>
            </div>
            <div className="text-center p-6 rounded-lg border border-border/50 hover:border-primary/50 transition-all hover:shadow-lg hover:shadow-primary/20">
              <div className="w-16 h-16 rounded-full bg-secondary/20 flex items-center justify-center mx-auto mb-4 glow-border-purple">
                <Icon name="Shield" size={32} className="text-secondary" />
              </div>
              <h3 className="text-xl font-bold mb-2">Гарантия качества</h3>
              <p className="text-muted-foreground">2 года официальной гарантии на все товары</p>
            </div>
            <div className="text-center p-6 rounded-lg border border-border/50 hover:border-primary/50 transition-all hover:shadow-lg hover:shadow-primary/20">
              <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center mx-auto mb-4 glow-border">
                <Icon name="Headphones" size={32} className="text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-2">Поддержка 24/7</h3>
              <p className="text-muted-foreground">Всегда на связи для решения ваших вопросов</p>
            </div>
          </div>
        </div>
      </footer>

      <footer className="border-t border-border/50 py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-primary to-secondary flex items-center justify-center glow-border">
                  <Icon name="Zap" size={18} className="text-background" />
                </div>
                <h3 className="text-xl font-bold">CYBERSTORE</h3>
              </div>
              <p className="text-muted-foreground">Технологии будущего доступны сегодня</p>
            </div>
            <div>
              <h4 className="font-bold mb-4">Компания</h4>
              <ul className="space-y-2 text-muted-foreground">
                <li><a href="#" className="hover:text-primary transition-colors">О нас</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Вакансии</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Блог</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Поддержка</h4>
              <ul className="space-y-2 text-muted-foreground">
                <li><a href="#" className="hover:text-primary transition-colors">FAQ</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Доставка</a></li>
                <li><a href="/contacts" className="hover:text-primary transition-colors">Контакты</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Соцсети</h4>
              <div className="flex gap-3">
                <Button size="icon" variant="outline" className="border-border/50 hover:border-primary/50">
                  <Icon name="Facebook" size={18} />
                </Button>
                <Button size="icon" variant="outline" className="border-border/50 hover:border-primary/50">
                  <Icon name="Instagram" size={18} />
                </Button>
                <Button size="icon" variant="outline" className="border-border/50 hover:border-primary/50">
                  <Icon name="Twitter" size={18} />
                </Button>
              </div>
            </div>
          </div>
          <div className="text-center text-muted-foreground border-t border-border/50 pt-8">
            <p>&copy; 2024 CYBERSTORE. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
