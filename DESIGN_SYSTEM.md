# 🎨 DESIGN SYSTEM — SABOR ARROCHADO

## PALETA DE CORES

### Cores Primárias

```
Verde-Limão (Primary)
HEX: #D4D836
RGB: 212, 216, 54
Uso: CTA, destaques, hover, acertos principais
```

```
Verde Escuro (Secondary)
HEX: #2D5016
RGB: 45, 80, 22
Uso: Fundos, seções escuras, textos em contraste
```

### Cores Neutras

```
Off-White (Fundo principal)
HEX: #F5F3ED
RGB: 245, 243, 237

Branco Puro
HEX: #FFFFFF
RGB: 255, 255, 255

Preto
HEX: #1A1A1A
RGB: 26, 26, 26
Uso: Textos principais

Cinza Escuro
HEX: #3A3A3A
RGB: 58, 58, 58
Uso: Textos secundários
```

---

## TIPOGRAFIA

### Títulos (Display)
**Fonte:** Poppins Bold / Montserrat Bold
- Tamanho: 48px - 72px (Desktop)
- Tamanho: 32px - 48px (Mobile)
- Line-height: 1.2
- Letter-spacing: -0.02em
- Cor: #1A1A1A
- Peso: 700

**Exemplo:**
```
"Sabor que tem sotaque."
"Os Queridinhos da Casa"
```

---

### Subtítulos (Semi-Display)
**Fonte:** Poppins SemiBold
- Tamanho: 28px - 36px (Desktop)
- Tamanho: 24px - 28px (Mobile)
- Line-height: 1.3
- Cor: #1A1A1A
- Peso: 600

**Exemplo:**
```
"Mais que comida. É Sabor Arrochado."
```

---

### Corpo de Texto
**Fonte:** Inter Regular / Open Sans Regular
- Tamanho: 16px (Desktop) / 14px (Mobile)
- Line-height: 1.6
- Cor: #3A3A3A
- Peso: 400
- Legibilidade máxima

**Exemplo:**
```
"O Sabor Arrochado traz para a mesa o sabor e a 
personalidade do Nordeste em pratos generosos, 
cheios de sabor e feitos para compartilhar bons momentos."
```

---

### Detalhes/Labels
**Fonte:** Poppins Medium
- Tamanho: 12px - 14px
- Text-transform: UPPERCASE
- Letter-spacing: 0.05em
- Cor: #D4D836 ou #2D5016
- Peso: 500

**Exemplo:**
```
TRADIÇÃO NORDESTINA
PRATOS GENEROSOS
```

---

### Botões
**Fonte:** Poppins SemiBold
- Tamanho: 16px
- Padding: 14px 32px (Desktop) / 12px 24px (Mobile)
- Border-radius: 4px
- Peso: 600
- Transição: 0.3s ease

**Variantes:**

#### Primary (Verde-Limão)
- Background: #D4D836
- Color: #1A1A1A
- Hover: Escurecer 10%, elevar sombra
- Cursor: pointer

#### Secondary (Verde Escuro)
- Background: #2D5016
- Color: #FFFFFF
- Hover: Aumentar intensidade
- Cursor: pointer

#### Outline (Branco)
- Background: transparent
- Border: 2px solid #FFFFFF
- Color: #FFFFFF
- Hover: Background #FFFFFF, Color #1A1A1A

---

## COMPONENTES VISUAIS

### Hero Section
```
Background: Imagem de prato (cover)
Overlay: Gradiente preto 30% opacidade
Texto: Branco, alinhado center/left
Altura: 100vh (desktop) / auto (mobile)
Posição: Relative para elementos flutuantes
```

### Card de Prato
```
Border: Nenhuma
Shadow: 0 4px 12px rgba(0,0,0,0.08)
Radius: 8px
Overflow: hidden
Hover: 
  - Transform: translateY(-4px)
  - Shadow: 0 12px 24px rgba(0,0,0,0.12)
  - Duração: 0.3s ease-out
```

### Seção Padrão
```
Padding: 80px 20px (Desktop) / 60px 16px (Mobile)
Max-width: 1200px
Margin: 0 auto
Background: Alternado (Off-white / Verde Escuro)
```

### Grid Editorial
```
Desktop: 3-4 colunas, assimétrico
Tablet: 2-3 colunas
Mobile: 1 coluna com stack
Gap: 20px
Algumas imagens ocupam 2 colunas
```

---

## ESPAÇAMENTO

```
XS: 4px
SM: 8px
MD: 16px
LG: 24px
XL: 32px
2XL: 48px
3XL: 64px
4XL: 80px
```

---

## SOMBRAS

```
Sutil: 0 2px 8px rgba(0,0,0,0.06)
Médio: 0 4px 12px rgba(0,0,0,0.08)
Forte: 0 12px 24px rgba(0,0,0,0.12)
Hover: 0 16px 32px rgba(0,0,0,0.15)
```

---

## TRANSIÇÕES

```
Rápido: 0.15s ease
Normal: 0.3s ease
Lento: 0.5s ease
Muito Lento: 0.8s ease-out
```

---

## ANIMAÇÕES

### Fade-in ao Scroll
```css
opacity: 0 → 1
duration: 0.6s
delay: conforme ordem
```

### Hover em Cards
```css
transform: translateY(-4px)
shadow: aumento suave
duration: 0.3s
```

### Parallax Discreto
```
Velocidade: 0.5x (não exagerado)
Apenas em imagens hero
```

### Botões
```
Hover: cor + sombra + transform leve
Active: press down 2px
Focus: outline em verde-limão
```

---

## RESPONSIVIDADE

### Breakpoints

```
Mobile: 320px - 640px
Tablet: 641px - 1024px
Desktop: 1025px+
```

### Ajustes por Device

**Mobile:**
- Font-size reduzida 20-30%
- Padding reduzido 50%
- Componentes full-width
- Botões altura aumentada (48px mínimo)

**Tablet:**
- Transição suave dos desktop values
- Grids 2-3 colunas

**Desktop:**
- Full width com max-width 1200px
- Espaçamento generoso
- Hover states ativos

---

## ELEMENTOS GRÁFICOS

### Estrelas (Inspiração do Logo)
```
Uso: Pequenos destaques, destaque de preços
Cor: #D4D836
Tamanho: 16px - 24px
Opacidade: 80% em backgrounds
```

### Linhas Decorativas
```
Cor: #D4D836 ou #2D5016
Espessura: 2px - 4px
Uso: Separadores, destaque de seções
```

### Formas Orgânicas
```
Uso: Separadores entre seções
SVG com curvas suaves
Cores: Gradientes sutis Verde → Verde Escuro
Opacidade: 20% - 40%
```

---

## IMAGENS

### Tratamento
```
Object-fit: cover
Aspect-ratio: varia conforme seção
Lazy loading: ativo
Format: WebP/AVIF com fallback JPG
```

### Recortes
```
Algumas imagens ultrapassam containers (20px)
Cria efeito editorial sofisticado
Apenas em desktop
```

---

## ACESSIBILIDADE

### Contraste
```
Texto preto em fundo claro: 7:1 (AAA)
Texto branco em verde: 4.5:1 (AA)
Verde-limão em verde escuro: 3.5:1 (AA)
```

### Foco
```
Focus outline: 2px solid #D4D836
Offset: 4px
Visível em todas as interações
```

### Tamanhos Mínimos
```
Botões: 48px altura
Links: 44px altura
Ícones: 24px mínimo
```

---

## SEO & META

### Meta Tags
```html
<title>Sabor Arrochado | Restaurante em Manaíra, João Pessoa</title>
<meta name="description" content="Sabor Arrochado Restaurante em Manaíra, João Pessoa. Sabores nordestinos, pratos generosos e uma experiência arrochada ao lado do Mag Shopping.">
<meta property="og:title" content="Sabor Arrochado | Restaurante em João Pessoa">
<meta property="og:image" content="[hero-image]">
<meta property="og:url" content="https://sabor-arrochado.com">
```

### Dados Estruturados
```json
{
  "@context": "https://schema.org",
  "@type": "Restaurant",
  "name": "Sabor Arrochado",
  "image": "[images]",
  "address": "Av. João Maurício, 1801 - Manaíra, João Pessoa - PB",
  "telephone": "+55 83 99932-8932",
  "url": "https://sabor-arrochado.com",
  "priceRange": "$$",
  "cuisineType": "Brazilian",
  "openingHoursSpecification": {
    "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
    "opens": "11:00",
    "closes": "15:30"
  }
}
```

---

## CHECKLIST FINAL

- ✅ Verde-limão usado estrategicamente (não em excesso)
- ✅ Tipografia com personalidade forte
- ✅ Imagens em destaque
- ✅ Espaços negativos generosos
- ✅ Contraste visual claro
- ✅ Animações elegantes e discretas
- ✅ Mobile-first responsivo
- ✅ Acessibilidade completa
- ✅ Performance otimizada
- ✅ SEO estruturado
- ✅ Sem templates genéricos
- ✅ Identidade visual clara
- ✅ Conversão em foco (WhatsApp, Cardápio, Localização)

---

**Próxima Etapa:** Iniciar desenvolvimento dos componentes React com TypeScript.

