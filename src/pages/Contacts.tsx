import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import Icon from "@/components/ui/icon";
import { useState } from "react";

const Contacts = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  return (
    <div className="min-h-screen bg-background">
      <nav className="border-b border-border/50 backdrop-blur-sm sticky top-0 z-50 bg-background/80">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <a href="/" className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-primary to-secondary flex items-center justify-center glow-border">
              <Icon name="Zap" size={24} className="text-background" />
            </div>
            <h1 className="text-2xl font-bold glow-text text-primary">CYBERSTORE</h1>
          </a>
          <Button variant="ghost" onClick={() => window.location.href = "/"}>
            <Icon name="ArrowLeft" size={20} className="mr-2" />
            На главную
          </Button>
        </div>
      </nav>

      <section className="relative overflow-hidden py-20">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-transparent to-secondary/5"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12 animate-fade-in">
              <h2 className="text-4xl md:text-6xl font-bold mb-4 glow-text">Свяжитесь с нами</h2>
              <p className="text-xl text-muted-foreground">
                Готовы ответить на все ваши вопросы 24/7
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <Card className="border-border/50 glow-border animate-slide-in-left">
                <CardHeader>
                  <CardTitle className="text-2xl">Отправить сообщение</CardTitle>
                  <CardDescription>Мы ответим в течение 24 часов</CardDescription>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="name">Имя</Label>
                      <Input
                        id="name"
                        placeholder="Ваше имя"
                        value={formData.name}
                        onChange={(e) => setFormData({...formData, name: e.target.value})}
                        className="bg-background border-border/50 focus:border-primary"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Email</Label>
                      <Input
                        id="email"
                        type="email"
                        placeholder="your@email.com"
                        value={formData.email}
                        onChange={(e) => setFormData({...formData, email: e.target.value})}
                        className="bg-background border-border/50 focus:border-primary"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="message">Сообщение</Label>
                      <Textarea
                        id="message"
                        placeholder="Расскажите нам о вашем вопросе..."
                        value={formData.message}
                        onChange={(e) => setFormData({...formData, message: e.target.value})}
                        className="bg-background border-border/50 focus:border-primary min-h-[120px]"
                      />
                    </div>
                    <Button type="submit" className="w-full bg-primary hover:bg-primary/90 glow-border">
                      <Icon name="Send" size={18} className="mr-2" />
                      Отправить сообщение
                    </Button>
                  </form>
                </CardContent>
              </Card>

              <div className="space-y-6 animate-fade-in" style={{ animationDelay: "200ms" }}>
                <Card className="border-border/50 hover:border-primary/50 transition-all hover:shadow-lg hover:shadow-primary/20">
                  <CardContent className="p-6 flex items-start gap-4">
                    <div className="w-12 h-12 rounded-lg bg-primary/20 flex items-center justify-center flex-shrink-0 glow-border">
                      <Icon name="Mail" size={24} className="text-primary" />
                    </div>
                    <div>
                      <h3 className="font-bold text-lg mb-1">Email</h3>
                      <p className="text-muted-foreground">support@cyberstore.com</p>
                      <p className="text-muted-foreground">sales@cyberstore.com</p>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-border/50 hover:border-primary/50 transition-all hover:shadow-lg hover:shadow-primary/20">
                  <CardContent className="p-6 flex items-start gap-4">
                    <div className="w-12 h-12 rounded-lg bg-secondary/20 flex items-center justify-center flex-shrink-0 glow-border-purple">
                      <Icon name="Phone" size={24} className="text-secondary" />
                    </div>
                    <div>
                      <h3 className="font-bold text-lg mb-1">Телефон</h3>
                      <p className="text-muted-foreground">+7 (800) 555-35-35</p>
                      <p className="text-sm text-muted-foreground">Пн-Вс: 24/7</p>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-border/50 hover:border-primary/50 transition-all hover:shadow-lg hover:shadow-primary/20">
                  <CardContent className="p-6 flex items-start gap-4">
                    <div className="w-12 h-12 rounded-lg bg-primary/20 flex items-center justify-center flex-shrink-0 glow-border">
                      <Icon name="MapPin" size={24} className="text-primary" />
                    </div>
                    <div>
                      <h3 className="font-bold text-lg mb-1">Офис</h3>
                      <p className="text-muted-foreground">г. Москва, ул. Инновационная, 42</p>
                      <p className="text-sm text-muted-foreground">БЦ "Технопарк", 15 этаж</p>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-border/50 hover:border-primary/50 transition-all hover:shadow-lg hover:shadow-primary/20">
                  <CardContent className="p-6 flex items-start gap-4">
                    <div className="w-12 h-12 rounded-lg bg-secondary/20 flex items-center justify-center flex-shrink-0 glow-border-purple">
                      <Icon name="Clock" size={24} className="text-secondary" />
                    </div>
                    <div>
                      <h3 className="font-bold text-lg mb-1">Часы работы</h3>
                      <p className="text-muted-foreground">Круглосуточная поддержка</p>
                      <p className="text-sm text-muted-foreground">Онлайн чат и email 24/7</p>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>

            <div className="mt-16 text-center animate-fade-in" style={{ animationDelay: "400ms" }}>
              <h3 className="text-2xl font-bold mb-6">Следите за нами</h3>
              <div className="flex gap-4 justify-center">
                <Button size="lg" variant="outline" className="border-border/50 hover:border-primary/50 glow-border">
                  <Icon name="Facebook" size={20} className="mr-2" />
                  Facebook
                </Button>
                <Button size="lg" variant="outline" className="border-border/50 hover:border-primary/50 glow-border">
                  <Icon name="Instagram" size={20} className="mr-2" />
                  Instagram
                </Button>
                <Button size="lg" variant="outline" className="border-border/50 hover:border-primary/50 glow-border">
                  <Icon name="Twitter" size={20} className="mr-2" />
                  Twitter
                </Button>
                <Button size="lg" variant="outline" className="border-border/50 hover:border-primary/50 glow-border">
                  <Icon name="Youtube" size={20} className="mr-2" />
                  YouTube
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="border-t border-border/50 py-8">
        <div className="container mx-auto px-4 text-center text-muted-foreground">
          <p>&copy; 2024 CYBERSTORE. Все права защищены.</p>
        </div>
      </footer>
    </div>
  );
};

export default Contacts;
