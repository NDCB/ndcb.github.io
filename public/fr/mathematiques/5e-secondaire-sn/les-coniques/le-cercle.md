---
title: Le cercle
description: Le cercle est une section conique correspondant à l'ensemble des points équidistants à un centre.
published: 2017-08-18
modified: 2018-01-21
authors: 
- Marc-Antoine Ouimet
mathjax: true
disqus: true
---

Le cercle en tant que section conique correspond à une tranche parallèle à la base d'un cône.
C'est une figure géométrique que l'on retrouve partout dans le quotidien et qui est à l'origine de la trigonométrie.

Étudions analytiquement le cercle en tant que section conique.

::: Le lieu géométrique du cercle

Le cercle correspond à l'ensemble des points équidistants à un centre.

:::

## L'équation cartésienne du cercle

Partant de la définition du lieu géométrique du cercle, nous pouvons illustrer sur un plan cartésien un point \\(\\color{blue}{O=(0,0)}\\) centré à l'origine qui correspond au centre du cercle.
On y ajoute un point \\(\\color{orange}{P=(x,y)}\\) à une distance positive et non nulle \\(\\color{red}{r}\\) de \\(\\color{blue}{O}.\\)
Cette distance \\(\\color{red}{r}\\) est constante en vertu du lieu géométrique du cercle.
Le cercle, quant à lui, correspond à l'ensemble des points décrits par \\(\\color{orange}{P}\\) en fonction de \\(\\color{orange}{x}\\) et \\(\\color{orange}{y}.\\)
Les points \\(\\color{blue}{O}\\) et \\(\\color{orange}{P}\\) décrivent en triangle rectangle avec l'horizontale, où \\(\\color{red}{r}=\\overline{\\color{blue}{O}\\color{orange}{P}}\\) correspond à l'hypoténuse.
En vertu du théorème de Pythagore, il est possible d'exprimer \\(\\color{red}{r}\\) à l'aide de la formule de la distance entre deux points.

::: figure figures/construction-du-cercle.svg

La construction du cercle en tant que conique.

:::

\\[\begin{align*}
r&=\\sqrt{(x_P-x_O)^2+(y_P-y_O)^2}
\\\\&=\\sqrt{x_P^2+y_P^2}&&\\because O = (0,0)
\\\\&=\\sqrt{x^2+y^2}
\end{align*}\\]

En élevant de part et d'autre de l'équation au carré, on obtient l'équation d'un cercle de rayon \\(r\\) centré à l'origine.

:: theorem L'équation d'un cercle centré à l'origine

L'équation d'un cercle \\(C\\) centré à l'origine et de rayon \\(r\\) s'exprime:

\\[\begin{equation}C:x^2+y^2=r^2.\end{equation}\label{cercle-centre-o}\\]

\\(r,\\) \\(x\\) et \\(y\\) étant des réels, \\(r>0,\\) \\(-r\\leq x\\leq r\\) et \\(-r\\leq y\\leq r.\\)

::: figure cercle-centre-o.svg

Le cercle centré à l'origine dans le plan cartésien.

:::

:::

Puisqu'un cercle découlant de l'équation \\(\eqref{cercle-centre-o}\\) est centré à l'origine, \\(x\\) et \\(y\\) sont tous deux contraints dans l'intervalle \\([-r,r\\).]
Intuitivement, c'est parce que la distance entre un point sur la circonférence et le centre du cercle est \\(r,\\) alors verticalement et horizontalement les distances maximales ne peuvent être que \\(r.\\)
Pour le démontrer, il suffit d'isoler \\(x\\) ou \\(y\\) dans l'équation \\(\eqref{cercle-centre-o} .\\)

\\[\begin{align*}
x^2+y^2&=r^2
\\\\y^2&=r^2-x^2
\\\\|y|&=\\sqrt{r^2-x^2}
\\\\y&=\\pm\\sqrt{r^2-x^2}
\end{align*}\\]

Puisque l'expression \\(r^2-x^2\\) est un radicande, il convient que \\(r^2-x^2\\geq 0,\\) ce qui implique que \\(x^2\\leq r^2.\\)
Conséquemment, \\(|x|\\leq r\\implies -r\\leq x\\leq r,\\) d'où la définition de \\(x\\) dans l'équation \\(\eqref{cercle-centre-o}\\) telle que \\(x\\in[-r,r\\).]
Similairement, pour trouver la définition de \\(y,\\) il faudra isoler \\(x\\) dans l'équation \\(\eqref{cercle-centre-o} .\\)

\\[\begin{align*}
x^2+y^2&=r^2
\\\\x^2&=r^2-y^2
\\\\|x|&=\\sqrt{r^2-y^2}
\\\\x&=\\pm\\sqrt{r^2-y^2}
\end{align*}\\]

Alors, en vertu de la définition de la fonction racine carrée, le radicande \\(r^2-y^2\\) doit être positif.

\\[\begin{align*}
r^2-y^2&\\geq 0
\\\\y^2&\\leq r^2
\\\\|y|&\\leq r
\\\\&\\implies-r\\leq y\\leq r
\end{align*}\\]

On conclut donc que \\(y\\in[-r,r\\).]

::: example Déterminer l'équation d'un cercle centré à l'origine à l'aide de son rayon

Quelle est l'équation canonique d'un cercle centré à l'origine et de rayon \\(3?\\)

À partir de l'équation \\(\eqref{cercle-centre-o} ,\\) l'équation recherchée devient \\(x^2+y^2=3^2.\\)

:::

::: example Déterminer le domaine et l'image d'un cercle centré à l'origine

Quels sont le domaine et l'image du cercle d'équation \\(x^2+y^2=81?\\)

À partir de l'équation \\(\eqref{cercle-centre-o} ,\\) \\(r=\\sqrt{81}=9.\\)
Sachant que la valeur minimale de \\(x\\) est \\(-r\\) et que sa valeur maximale est \\(r,\\) alors le domaine du cercle est \\([-9,9\\).]
De même, sachant que \\(y\\) est restreint entre \\(-r\\) et \\(r,\\) l'image du cercle est \\([-9,9\\).]

### L'équation canonique du cercle

Si le cercle n'était pas centré à l'origine, alors il en reviendrait à dire qu'on y effectue une translation sur le plan cartésien.
Pour déterminer l'équation d'un tel cercle, il faudra reprendre la formule de la distance entre deux points et redéfinir le centre du cercle.
Soit \\(Q=(h,k),\\) le centre d'un cercle de rayon \\(r\\) et \\(P=(x,y)\\) décrivant l'ensemble des points sur sa circonférence, tel que \\(r=\\overline{QP}.\\)

\\[\begin{align*}
r&=\\sqrt{(x_P-x_Q)^2+(y_P-y_Q)^2}
\\\\r&=\\sqrt{(x-h)^2+(y-k)^2}
\end{align*}\\]

En élevant de part et d'autre l'équation au carré, on obtient l'équation d'un cercle de rayon \\(r\\) centré en \\((h,k).\\)

+theorem("L'équation canonique d'un cercle")

L'équation d'un cercle \\(C\\) centré en \\(Q=(h,k)\\) et de rayon \\(r\\) s'exprime:

\\[\begin{equation}(x-h)^2+(y-k)^2=r^2.\end{equation}\label{cercle-canonique}\\]

\\(r,\\) \\(h,\\) \\(k,\\) \\(x\\) et \\(y\\) étant des réels, \\(r>0,\\) \\(h-r\\leq x\\leq h+r\\) et \\(k-r\\leq y\\leq k+r.\\)

::: figure figures/cercle-canonique.svg

Le cercle d'équation canonique dans le plan cartésien.

:::

Puisqu'un cercle découlant de l'équation \\(\eqref{cercle-canonique}\\) est centré en \\((h,k)\\) et de rayon \\(r,\\) alors \\(x\\) doit nécessairement être contraint par translation entre \\(h-r\\) et \\(h+r.\\) Similairement, \\(y\\) est compris entre \\(k-r\\) et \\(k+r,\\) les extremums verticaux du cercle.
La démonstration de ces affirmations est semblable à celles que nous avons fait en ce qui a trait au cercle d'équation \\(\eqref{cercle-centre-o} .\\)
Il faudra isoler \\(x\\) et \\(y\\) dans l'équation \\(\eqref{cercle-canonique} .\\)

\\[\begin{align*}
(x-h)^2+(y-k)^2&=r^2
\\\\(y-k)^2&=r^2-(x-h)^2
\\\\|y-k|&=\\sqrt{r^2-(x-h)^2}
\\\\y-k&=\\pm\\sqrt{r^2-(x-h)^2}
\\\\y&=k\\pm\\sqrt{r^2-(x-h)^2}
\end{align*}\\]

En vertu de la définition de la fonction racine carrée, le radicande \\(r^2-(x-h)^2\\) doit être positif.

\\[\begin{align*}
r^2-(x-h)^2&\\geq 0
\\\\(x-h)^2&\\leq r^2
\\\\|x-h|&\\leq r
\\\\&\\implies -r\\leq x-h\\leq r
\\\\&\\implies h-r\\leq x\\leq h+r
\end{align*}\\]

Alors, pour un cercle d'équation \\(\eqref{cercle-canonique} ,\\) \\(x\\in[h-r,h+r\\).]
De même manière, pour trouver la définition de \\(y,\\) il faudra isoler \\(x\\) dans l'équation \\(\eqref{cercle-canonique} .\\)

\\[\begin{align*}
(x-h)^2+(y-k)^2&=r^2
\\\\(x-h)^2&=r^2-(y-k)^2
\\\\|x-h|&=\\sqrt{r^2-(y-k)^2}
\\\\x-h&=\\pm\\sqrt{r^2-(y-k)^2}
\\\\x&=h\\pm\\sqrt{r^2-(y-k)^2}
\end{align*}\\]

Ainsi, en vertu de la définition de la fonction racine carrée, le radicande \\(r^2-(y-k)^2\\) doit être positif.

\\[\begin{align*}
r^2-(y-k)^2&\\geq 0
\\\\(y-k)^2&\\leq r^2
\\\\|y-k|&\\leq r
\\\\&\\implies -r\\leq y-k\\leq r
\\\\&\\implies k-r\\leq y\\leq k+r
\end{align*}\\]

Enfin, pour un cercle d'équation \\(\eqref{cercle-canonique} ,\\) \\(y\\in[k-r,k+r\\).]

::: example Déterminer l'équation d'un cercle à partir de son centre et de son rayon

Quelle est l'équation canonique d'un cercle de rayon \\(4\\) centré au point \\(A=(-4,7)?\\)

À partir de l'équation \\(\eqref{cercle-canonique} ,\\) si \\(r=4\\) et \\(A=(h,k)=(-4,7),\\) alors l'équation du cercle devient \\((x+4)^2+(y-7)^2=4^2.\\)

:::

::: example Utilisation du domaine d'un cercle d'équation canonique

Existe-t-il un point sur la circonférence d'un cercle d'équation \\((x-2)^2+(y+7)^2=16\\) dont l'abscisse est \\(-2?\\)

À partir de l'équation \\(\eqref{cercle-canonique} ,\\) \\(r=\\sqrt{16}=4\\) et \\((h,k)=(2,-7).\\)
Sachant que le domaine d'un tel cercle est \\([h-r,h+r],\\) nous pouvons vérifier que \\(-2\\in[-2,6.]\\)

:::

## Le cercle dans le plan cartésien

L'équation du cercle, tout comme celle des autres coniques, est une équation implicite.
Par conséquent, il est impossible d'isoler \\(x\\) ou \\(y\\) des équations \\(\eqref{cercle-centre-o}\\) et \\(\eqref{cercle-canonique}\\) de telle sorte que le résultat soit une seule fonction.
Nous avons précédemment isolé \\(x\\) et \\(y\\) dans l'équation \\(\eqref{cercle-canonique} .\\)

\\[\begin{align*}
(x-h)^2+(y-k)^2&=r^2
\\\\x&=h\\pm\\sqrt{r^2-(y-k)^2}
\\\\x&=\begin{cases}
h+\\sqrt{r^2-(y-k)^2}
\\\\h-\\sqrt{r^2-(y-k)^2}
\end{cases}
\end{align*}\\]

\\[\begin{align*}
(x-h)^2+(y-k)^2&=r^2
\\\\y&=k\\pm\\sqrt{r^2-(x-h)^2}
\\\\y&=\begin{cases}
k+\\sqrt{r^2-(x-h)^2}
\\\\k-\\sqrt{r^2-(x-h)^2}
\end{cases}
\end{align*}\\]

Les fonctions par parties résultantes n'ont pas de domaine qui leur soit unique.
En effet, un cercle ne peut pas être une fonction puisqu'il existe plusieurs valeurs d'ordonnée \\(y\\) pour une même valeur d'abscisse \\(x.\\)
Cependant, les fonctions résultantes s'avèrent intéressantes: chacune d'entre elles représente une moitié du cercle.
Par ce, \\(x=h+\\sqrt{r^2-(y-k)^2}\\) décrit la moitié droite du cercle, \\(x=h-\\sqrt{r^2-(y-k)^2}\\) décrit sa moitié gauche, \\(y=k+\\sqrt{r^2-(x-h)^2}\\) décrit sa moitié haute et \\(y=k-\\sqrt{r^2-(x-h)^2}\\) décrit sa moitié basse.
Si nous voulions résoudre des équations impliquant des cercles, il nous faudrait considérer un couple d'équations décrivant le cercle et essentiellement effectuer deux fois les mêmes étapes de résolution, ou nous pourrions nous servir de la substitution.

::: figure figures/cercle-courbes-explicites-x.svg

Les courbes explicites en \\(x\\) d'un cercle d'équation canonique.

:::

::: figure figures/cercle-courbes-explicites-y.svg

Les courbes explicites en \\(y\\) d'un cercle d'équation canonique.

:::

### L'intersection d'un cercle et d'une droite

Soit un cercle d'équation \\(\eqref{cercle-canonique}\\) et une droite d'équation \\(y=mx+b\\Longleftrightarrow x=\\dfrac{y-b}{m}.\\)
Lorsqu'on cherche le ou les points d'intersection entre une droite et un cercle, il suffit de substituer l'équation de la droite dans celle du cercle.
Si \\(y=mx+b,\\) alors il suffit de remplacer \\(y\\) par \\(mx+b\\) dans l'équation \\(\eqref{cercle-canonique} .\\)

\\[\begin{align*}
(x-h)^2+(y-k)^2&=r^2
\\\\(x-h)^2+(\\color{blue}{mx+b}-k)^2&=r^2&&\\color{blue}{\\text{Par substitution}}
\end{align*}\\]

Si en revanche \\(x=\\dfrac{y-b}{m},\\) alors il suffit de remplacer \\(x\\) par \\(\\dfrac{y-b}{m}\\) dans l'équation \\(\eqref{cercle-canonique} .\\)

\\[\begin{align*}
(x-h)^2+(y-k)^2&=r^2
\\\\\\left(\\color{blue}{\\dfrac{y-b}{m}}-h\\right)^2+(y-k)^2&=r^2&&\\color{blue}{\\text{Par substitution}}
\end{align*}\\]

::: example L'intersection d'un cercle et d'une droite en deux points

Soit un cercle d'équation \\((x-5)^2+(y-2)^2=25\\) et une droite d'équation \\(y=-2x+10.\\)
Quels sont leurs points d'intersection s'il y en a?

Il suffit de substituer l'équation de la droite dans celle du cercle pour éliminer une des variables manquantes.

\\[\begin{align*}
(x-5)^2+(y-2)^2&=25
\\\\(x-5)^2+(\\color{blue}{-2x+10}-2)^2&=25&&\\color{blue}{\\text{Par substitution}}
\\\\(x-5)^2+(-2x+8)^2&=25
\\\\(x^2-10x+25)+(4x^2-32x+64)&=25
\\\\5x^2-10x-32x+64&=0
\\\\5x(x-2)-32(x-2)&=0
\\\\(5x-32)(x-2)&=0
\\\\&\begin{cases}5x-32=0\\\\x-2=0\end{cases}
\\\\&\begin{cases}x=\\dfrac{32}{5}\\\\x=2\end{cases}
\end{align*}\\]

Connaissant l'abscisse des points de la solution, il ne reste plus qu'à substituer leur valeur dans l'équation de la droite.

\\[\begin{align*}
y&=-2x+10
\\\\&=-2\\left(\\color{blue}{\\dfrac{32}{5}}\\right)+10&&\\color{blue}{\\text{Par substitution}}
\\\\&=-\\dfrac{64}{5}+10
\\\\&=\\dfrac{50-64}{5}
\\\\&=-\\dfrac{14}{5}
\end{align*}\\]

\\[\begin{align*}
y&=-2x+10
\\\\&=-2(\\color{blue}{2})+10&&\\color{blue}{\\text{Par substitution}}
\\\\&=6
\end{align*}\\]

Les points d'intersection entre la droite et le cercle sont donc \\(\\left(\\dfrac{32}{5},-\\dfrac{14}{5}\\right)\\) et \\((2,6).\\)

::: figure figures/exemple-intersection-cercle-droite-deux-solutions.svg

Réponse à l'exemple.

:::

:::

::: example L'intersection d'un cercle et d'une droite en un point

Soit un cercle d'équation \\(x^2+(y-1)^2=5\\) et une droite d'équation \\(y-2x=6.\\)
Quels sont leurs points d'intersection s'il y en a?

Il suffit d'isoler \\(x\\) ou \\(y\\) dans l'équation de la droite et de substituer l'équation résultante dans l'équation du cercle pour éliminer une des variables manquantes.

\\[\begin{align*}
y-2x&=6
\\\\y&=6+2x
\end{align*}\\]

\\[\begin{align*}
x^2+(y-1)^2&=5
\\\\x^2+(\\color{blue}{6+2x}-1)^2&=5&&\\color{blue}{\\text{Par substitution}}
\\\\x^2+(5+2x)^2&=5
\\\\x^2+25+20x+4x^2&=5
\\\\5x^2+20x+25&=5
\\\\x^2+4x+5&=1
\\\\x^2+4x+4&=0
\\\\(x+2)^2&=0
\\\\x+2&=0
\\\\x&=-2
\end{align*}\\]

Connaissant l'abscisse du point de la solution, il ne reste plus qu'à la substituer dans l'équation de la droite.

\\[\begin{align*}
y&=6+2x
\\\\y&=6+2(\\color{blue}{-2})&&\\color{blue}{\\text{Par substitution}}
\\\\y&=2
\end{align*}\\]

Le point d'intersection entre la droite et le cercle est donc \\((-2,2).\\)

::: figure figures/exemple-intersection-cercle-droite-une-solution.svg

Réponse à l'exemple.

:::

:::

::: example L'intersection entre un cercle et une droite sans solution

Soit un cercle d'équation \\(x^2+(y-5)^2=4\\) et une droite d'équation \\(y=x+1.\\)
Quels sont leurs points d'intersection s'il y en a?

Il suffit de substituer l'équation de la droite dans celle du cercle pour éliminer une des variables manquantes.

\\[\begin{align*}
x^2+(y-5)^2&=4
\\\\x^2+(\\color{blue}{x+1}-5)^2&=4&&\\color{blue}{\\text{Par substitution}}
\\\\x^2+(x-4)^2&=4
\\\\x^2+x^2-8x+16&=4
\\\\2x^2-8x+12&=0
\\\\x^2-4x+6&=0
\\\\x&=\\dfrac{4\\pm\\sqrt{(-4)^2-4\\cdot 1\\cdot 6}}{2\\cdot 1}
\\\\&=\\dfrac{4\\pm\\sqrt{16-24}}{2}
\\\\&=\\dfrac{4\\pm\\sqrt{-8}}{2}
\end{align*}\\]

Puisque le discriminant de l'équation \\(x^2-4x+6=0\\) est négatif, il n'y a pas de solutions à l'équation.
Par conséquent, il n'y a pas de point d'intersection entre le cercle et la droite.

::: figure figures/exemple-intersection-cercle-droite-aucune-solution.svg

Réponse à l'exemple.

:::

:::

### La droite tangente à un cercle

::: definition Les droites tangentes

Une droite tangente à une courbe n'a qu'un point d'intersection avec la courbe dans un voisinage local.

:::

Les droites tangentes à n'importe quel cercle sont particulières.
Soit un cercle quelconque et un segment de droite reliant son centre à un point sur sa circonférence.
Une droite ne pourra être tangente à ce point sur la circonférence que si la droite et le segment de droite sont perpendiculaires.

::: theorem La droite tangente à un cercle

Une droite tangente en un point \\(P\\) sur la circonférence d'un cercle centré en \\(Q\\) est perpendiculaire au segment de droite \\(\\overline{QP}.\\)

::: proof

Soit le centre \\(Q=(h,k)\\) d'un cercle de rayon \\(r.\\)
Soit \\(P,\\) un point sur une droite d'équation \\(y=k-r.\\)
Le point \\(P\\) ne peut être le point de tangence entre le cercle et la droite que si le segment \\(\\overline{QP}\\) est perpendiculaire à la droite, là où \\(\\overline{QP}=r,\\) sa valeur minimale.
En effet, pour tous \\(P\\) différents du point de tangence, il existe une distance \\(r\lt\\overline{QP}.\\)

::: figure figures/preuve-perpendicularite-droite-tangente-cercle.svg

Construction de la preuve.

:::

:::

:::

En vertu du théorème précédent, il sera possible de déterminer l'équation générale de la droite tangente à un cercle.
Considérons un cercle d'équation canonique \\(\eqref{cercle-canonique}\\) et un point \\(P=(x_P,y_P)\\) sur sa circonférence.
Rappelons-nous aussi que pour une droite d'équation \\(y=m_1x+b,\\) le taux de variation d'une droite qui lui est perpendiculaire est \\(m_2=-\\dfrac{1}{m_1}.\\)
L'équation d'une droite de taux de variation \\(m\\) passant par \\(P\\) est \\(y-y_P=m(x-x_P).\\)
Alors, il est possible de trouver l'équation \\(y-y_P=m_2(x-x_P)\\) de la droite tangente au cercle d'équation \\(\eqref{cercle-canonique}\\) au point \\(P\\) en partant du centre du cercle \\((h,k).\\)

::: figure figures/construction-equation-generale-droite-tangente-cercle.svg

La construction de l'équation générale de la droite tangente en \\(P\\) au cercle d'équation canonique \\(\eqref{cercle-canonique} .\\)

:::

\\[\begin{align*}
m_2&=-\\dfrac{1}{m_1}
\\\\&=-\\dfrac{1}{\\dfrac{\\Delta y}{\\Delta x}}
\\\\&=-\\dfrac{1}{\\dfrac{y_P-k}{x_P-h}}
\\\\&=-\\dfrac{x_P-h}{y_P-k}
\end{align*}\\]

\\[
y-y_P=m_2(x-x_P)
\\]

En substituant l'équation de \\(m_2\\) dans la dernière équation, on obtient l'équation générale d'une droite tangente en \\(P\\) à un cercle canonique.

::: theorem L'équation générale d'une droite tangente à un cercle canonique

Soit un cercle \\(C\\) d'équation canonique \\(\eqref{cercle-canonique}\\) centré en \\((h,k).\\) Si le point \\(P=(x_P,y_P)\\) sur la circonférence de \\(C\\) est tangent à une droite \\(\\lambda,\\) alors \\(P\\) est le point de tangence entre \\(C\\) et \\(\\lambda,\\) et l'équation de la droite tangente s'exprime:

\\[\begin{equation}\\lambda:y=-\\dfrac{x_P-h}{y_P-k}(x-x_P)+y_P.\end{equation}\label{tangente-generale-cercle}\\]

:::

::: example Déterminer l'équation d'une droite tangente à un cercle

Soit un cercle centré en \\(Q=(-3,-2)\\) et le point \\(P=(-1,2).\\) Quelle est l'équation de la droite tangente au cercle au point \\(P.\\)
Sachant que la droite tangente à un cercle est perpendiculaire au rayon reliant son centre au point de tangence, alors il faut trouver le taux de variation \\(m_1\\) de la droite \\(\\overline{QP}.\\)

\\[\begin{align*}
m_1&=\\dfrac{\\Delta y}{\\Delta x}
\\\\&=\\dfrac{y_P-y_Q}{x_P-x_Q}
\\\\&=\\dfrac{2--2}{-1--3}
\\\\&=\\dfrac{4}{2}
\\\\&=2
\end{align*}\\]

Connaissant la relation entre les taux de variation de droites perpendiculaires \\(m_1=-\\dfrac{1}{m_2},\\) et l'équation d'une droite passant par un point \\((x_1,y_1)\\) étant \\(y-y_1=m(x-x_1),\\) l'équation de la droite tangente au cercle devient:

\\[\begin{align*}
y-y_P&=m_2(x-x_P)
\\\\y-2&=-\\dfrac{1}{2}(x--1)
\\\\y&=-\\dfrac{1}{2}(x+1)+2
\\\\&=-\\dfrac{1}{2}x+\\dfrac{3}{2}.
\end{align*}\\]

::: figure figures/exemple-equation-droite-tangente-cercle.svg

Réponse à l'exemple.

:::

:::

::: example Déterminer l'équation d'un cercle à l'aide de la perpendicularité de la tangente au rayon

Soit une droite d'équation \\(2x+3y=30\\) tangente à un cercle centré en \\(Q=(4,k).\\)
Si le point de tangence entre la droite et le cercle est \\(P=(6,6),\\) quelle est l'équation du cercle?

Le premier élément du problème que nous cherchons est la valeur de \\(k.\\)
En vertu de la perpendicularité de la droite tangente au cercle par rapport au segment reliant le point de tangence et le centre du cercle, alors \\(\\overline{QP}\\) est perpendiculaire à la droite \\(2x+3y=30.\\) Réécrivons la droite sous forme canonique \\(y=m_2x+b.\\)

\\[\begin{align*}
2x+3y&=30
\\\\3y&=-2x+30
\\\\y&=-\\dfrac{2}{3}x+10
\end{align*}\\]

La droite perpendiculaire \\(y=m_1x+b\\) à cette dernière s'obtient à partir de la relation entre leur taux de variation et du point \\(P.\\)

\\[\begin{align*}
m_1&=-\\dfrac{1}{m_2}
\\\\&=-\\dfrac{1}{-\\dfrac{2}{3}}
\\\\&=\\dfrac{3}{2}
\end{align*}\\]

\\[\begin{align*}
y-y_1&=m(x-x_1)
\\\\y-6&=m_1(x-6)
\\\\y&=\\dfrac{3}{2}(x-6)+6
\\\\&=\\dfrac{3}{2}x-9+6
\\\\&=\\dfrac{3}{2}x-3
\end{align*}\\]

Cette droite intersecte le point de tangence \\(P\\) ainsi que le centre du cercle \\(Q=(4, k).\\)

\\[\begin{align*}
y&=\\dfrac{3}{2}x-3
\\\\&=\\dfrac{3}{2}\\cdot\\color{blue}{4}-3&&\\color{blue}{\\text{Par substitution}}
\\\\&=6-3
\\\\&=3
\end{align*}\\]

Alors, \\(Q=(4, 3).\\) Le second élément du problème qu'il nous faut trouver à présent est la valeur du rayon \\(r=\\overline{QP},\\) ou plutôt \\(r^2\\) pour l'équation du cercle.

\\[\begin{align*}
r&=\\sqrt{(x_P-x_Q)^2+(y_P-y_Q)^2}
\\\\r^2&=(x_P-x_Q)^2+(y_P-y_Q)^2
\\\\&=(6-4)^2+(6-3)^2
\\\\&=4+9
\\\\&=13
\end{align*}\\]

À partir de l'équation canonique du cercle \\(\eqref{cercle-canonique} ,\\) la réponse devient:

\\[
(x-4)^2+(y-3)^2=13.
\\]

::: figure figures/exemple-determiner-equation-cercle-tangente.svg

Réponse à l'exemple.

:::

:::

::: example Déterminer l'équation d'un cercle à partir des équations de deux tangentes

Quelle est l'équation du cercle tangent à la droite \\(y=\\dfrac{3}{4}x+\\dfrac{7}{4}\\) en \\(P=(3,4)\\) et tangent à la droite \\(4x-3y=49\\) en \\(M=(10,-3)?\\)

La droite perpendiculaire à une droite tangente à un cercle intersecte son centre.
Connaissant l'équation de deux droites tangentes, l'intersection de leur droite perpendiculaire partant de leur point de tangence auront pour solution le centre du cercle.
Il faut trouver les équations de ces droites perpendiculaires.

Pour déterminer l'équation de la droite perpendiculaire à \\(y=\\dfrac{3}{4}x+\\dfrac{7}{4}\\) passant par le point \\(P=(3,4):\\)

\\[\begin{align*}
\\\\m_1&=-\\dfrac{1}{m_2}&&\\text{Soit }m_2=\\dfrac{3}{4}
\\\\&=-\\dfrac{1}{\\dfrac{3}{4}}
\\\\&=-\\dfrac{4}{3}
\end{align*}\\]

\\[\begin{align*}
y-y_P&=m_1(x-x_P)
\\\\y-4&=-\\dfrac{4}{3}(x-3)
\\\\y&=-\\dfrac{4}{3}(x-3)+4
\\\\&=-\\dfrac{4}{3}x+4+4
\\\\&=-\\dfrac{4}{3}x+8.
\end{align*}\\]

Pour déterminer l'équation de la droite perpendiculaire à \\(4x-3y=49\\) passant par le point \\(M=(10,-3):\\)

\\[\begin{align*}
4x-3y&=49
\\\\-3y&=-4x+49
\\\\y&=\\dfrac{4}{3}x-\\dfrac{49}{3}
\end{align*}\\]

\\[\begin{align*}
\\\\m_1&=-\\dfrac{1}{m_2}&&\\text{Soit }m_2=\\dfrac{4}{3}
\\\\&=-\\dfrac{1}{\\dfrac{4}{3}}
\\\\&=-\\dfrac{3}{4}
\end{align*}\\]

\\[\begin{align*}
y-y_M&=m_1(x-x_M)
\\\\y--3&=-\\dfrac{3}{4}(x-10)
\\\\y+3&=-\\dfrac{3}{4}x+\\dfrac{30}{4}
\\\\y&=-\\dfrac{3}{4}x+\\dfrac{15}{2}-3
\\\\&=-\\dfrac{3}{4}x+\\dfrac{15-6}{2}
\\\\&=-\\dfrac{3}{4}x+\\dfrac{9}{2}.
\end{align*}\\]

Il faut désormais résoudre le système d'équations linéaires \\(\begin{cases}y=-\\dfrac{4}{3}x+8\\\\y=-\\dfrac{3}{4}x+\\dfrac{9}{2}\end{cases}.\\)

\\[\begin{align*}
-\\dfrac{4}{3}x+8&=-\\dfrac{3}{4}x+\\dfrac{9}{2}&&\\text{Par comparaison}
\\\\\\dfrac{3}{4}x-\\dfrac{4}{3}x&=\\dfrac{9}{2}-8
\\\\\\dfrac{9-16}{12}x&=\\dfrac{9-16}{2}
\\\\\\dfrac{-7}{12}x&=\\dfrac{-7}{2}
\\\\x&=\\dfrac{-7}{2}\\cdot\\dfrac{12}{-7}
\\\\&=6
\end{align*}\\]

\\[\begin{align*}
y&=-\\dfrac{4}{3}x+8
\\\\&=-\\dfrac{4}{3}\\cdot \\color{blue}{6}+8&&\\color{blue}{\\text{Par substitution}}
\\\\&=-8+8
\\\\&=0
\end{align*}\\]

Alors, les coordonnées du centre du cercle sont \\(Q=(6,0).\\)
Il faut maintenant trouver la valeur de son rayon \\(r,\\) qui équivaut à la longueur des segments \\(\\overline{QP}\\) et \\(\\overline{QM}.\\)

\\[\begin{align*}
r&=\\overline{QP}
\\\\&=\\sqrt{(x_P-x_Q)^2+(y_P-y_Q)^2}
\\\\r^2&=(3-6)^2+(4-0)^2
\\\\&=9+16
\\\\&=25
\end{align*}\\]

À partir de l'équation canonique du cercle \\(\eqref{cercle-canonique} ,\\) la réponse devient:

\\[
(x-6)^2+y^2=25.
\\]

::: figure figures/exemple-determiner-equation-cercle-deux-tangentes.svg

Réponse à l'exemple.

:::

:::

### Les inéquations et le cercle

La définition du lieu géométrique du cercle permet aussi de décrire une région délimitée du plan cartésien par le biais d'une inéquation.
Plutôt que de servir du signe de l'égalité dans l'équation canonique du cercle \\(\eqref{cercle-canonique} ,\\) on emploiera alors \\(\\lt\\) ou \\(\\gt\\) qui excluent la circonférence du cercle, ou encore \\(\\leq\\) ou \\(\\geq\\) qui incluent la circonférence du cercle.
Cependant, pour comprendre quel signe décrit quelle région dans le plan cartésien, il faut considérer la valeur du rayon du cercle.
Partons de l'équation d'un cercle centré à l'origine \\(\eqref{cercle-centre-o}\\) sans le signe d'égalité.

\\[
x^2+y^2\\:\Box\\:r^2
\\]

Si la relation \\(\Box\\) était une égalité avec \\(r^2,\\) alors l'équation décrirait l'ensemble des points équidistants au centre \\(O\\) par la distance \\(r.\\)
Si nous considérions des valeurs plus petites que \\(r,\\) alors nous nous retrouverions à décrire la région délimitée à l'intérieur du cercle de rayon \\(r.\\)
En revanche, si nous considérions des valeurs plus grandes que \\(r,\\) alors nous décririons l'ensemble du plan cartésien à l'exception de la région délimitée à l'intérieur du cercle de rayon \\(r.\\)

::: figure figures/inequation-cercle-plus-petit-que-rayon.svg

Le graphe de l'inéquation \\((x-h)^2+(y-k)^2\lt r^2,\\) qui décrit la région délimitée à l'intérieur du cercle en excluant sa circonférence.

:::

::: figure figures/inequation-cercle-plus-petit-ou-egal-au-rayon.svg

Le graphe de l'inéquation \\((x-h)^2+(y-k)^2\\leq r^2,\\) qui décrit la région délimitée à l'intérieur du cercle en incluant sa circonférence.

:::

::: figure figures/inequation-cercle-plus-grand-que-rayon.svg

Le graphe de l'inéquation \\((x-h)^2+(y-k)^2\gt r^2,\\) qui décrit la région délimitée à l'extérieur du cercle en excluant sa circonférence.

:::

::: figure figures/inequation-cercle-plus-grand-ou-egal-au-rayon.svg

Le graphe de l'inéquation \\((x-h)^2+(y-k)^2\\geq r^2,\\) qui décrit la région délimitée à l'extérieur du cercle en incluant sa circonférence.

:::

Un truc pour déterminer la région délimitée par l'inéquation d'un cercle est de l'évaluer au point \\(Q=(h,k),\\) le centre du cercle.
Ce faisant, si l'inéquation est vérifiée, c'est-à-dire qu'elle est vraie pour le couple \\((x,y)\\) donné, alors l'inéquation comprend l'intérieur du cercle.
Autrement, elle comprend son extérieur.

::: example Un point compris dans une inéquation de cercle

Le point \\(P=(-7,-1)\\) est-il compris dans la région délimitée par l'inéquation \\((x+5)^2+(y+3)^2\\leq 20?\\)
Il suffit d'insérer les coordonnées du point \\(P\\) dans l'inéquation pour voir si le couple de valeurs \\((x,y)\\) la vérifie.

\\[\begin{align*}
(x+5)^2+(y+3)^2&\\stackrel{?}{\\leq}20 &&\\text{Soit }(x,y)=(-7,-1)
\\\\(-7+5)^2+(-1+3)^2&\\stackrel{?}{\\leq}20
\\\\(-2)^2+(2)^2&\\stackrel{?}{\\leq}20
\\\\8&\\leq 20
\end{align*}\\]

Alors oui, le point \\(P=(-7,-1)\\) est compris dans la région de l'inéquation \\((x+5)^2+(y+3)^2\\leq 20.\\)

::: figure figures/exemple-point-compris-inequation-interieur-cercle.svg

Réponse à l'exemple.

:::

:::

::: example Un point non-compris dans une inéquation de cercle

Le point \\(P=(-3,8)\\) est-il compris dans la région délimitée par l'inéquation \\((x-1)^2+(y-6)^2\lt 20?\\)
Il suffit d'insérer les coordonnées du point \\(P\\) dans l'inéquation pour voir si le couple de valeurs \\((x,y)\\) la vérifie.

\\[\begin{align*}
(x-1)^2+(y-6)^2&\\stackrel{?}{\lt}20 &&\\text{Soit }(x,y)=(-3,8)
\\\\(-3-1)^2+(8-6)^2&\\stackrel{?}{\lt}20
\\\\(-4)^2+(2)^2&\\stackrel{?}{\lt}20
\\\\20&\\nless 20
\end{align*}\\]

Alors non, le point \\(P=(-3,8)\\) n'est pas compris dans la région de l'inéquation \\((x-1)^2+(y-6)^2\lt 20.\\)

::: figure figures/exemple-point-non-compris-inequation-circonference-cercle.svg

Réponse à l'exemple.

:::

:::

### La forme générale de l'équation d'un cercle

La forme générale de l'équation d'un cercle consiste au développement de son équation canonique \\(\eqref{cercle-canonique} .\\)

\\[\begin{align*}
(x-h)^2+(y-k)^2&=r^2
\\\\x^2-2xh+h^2+y^2-2yk+k^2-r^2&=0
\\\\x^2+y^2-2hx-2ky+h^2+k^2-r^2&=0
\end{align*}\\]

Ce faisant, l'équation prend la forme suivante:

\\[\begin{equation}Ax^2+Bxy+Cy^2+Dx+Ey+F=0\end{equation}\label{cercle-generale}\\]

qui caractérise toutes les coniques. Telle quelle, l'équation décrit une section conique ayant subit une rotation si \\(B\\neq0.\\)
L'équation générale ne décrit un cercle que lorsque \\(A=C,\\) duquel cas on pourrait annuler les valeurs de \\(A\\) et \\(C\\) en divisant de part et d'autre l'équation par \\(A\\) ce qui nous laisserait avec un coefficient de \\(1\\) pour les termes \\(x^2\\) et \\(y^2.\\)
Ces contraites reviennent à dire que le discriminant \\(\\Delta = B^2-4AC\\) doit être négatif et que \\(A=C.\\)
Du développement que nous avons fait plus tôt, on remarque que \\(D=-2h,\\) \\(E=-2k\\) et \\(F=h^2+k^2-r^2.\\)
Il ne vaut pas la peine de mémoriser ces coefficients.
Le problème plus intéressant qui surgit lorsqu'on se sert de la forme générale de l'équation d'un cercle est d'en dégager la forme canonique.
Pour ce faire, il faudra factoriser l'équation \\(\eqref{cercle-generale} .\\)
On aura recours à la complétion du carré, comme nous verrons dans les exemples numériques.

::: example Passage de la forme générale à la forme canonique de l'équation d'un cercle

Quelle est l'équation canonique \\(\eqref{cercle-canonique}\\) d'un cercle d'équation \\(x^2+y^2+10x-6y=2?\\)
On aura recours à la complétion du carré pour factoriser l'équation. Il ne faut pas oublier de répliquer les ajouts que l'on fait de part et d'autre de l'équation.

\\[\begin{align*}
x^2+y^2+10x-6y&=2
\\\\x^2+10x+y^2-6y&=2
\\\\x^2+10x+\\left(\\dfrac{10}{2}\\right)^2+y^2-6y+\\left(\\dfrac{-6}{2}\\right)^2&=2+\\left(\\dfrac{10}{2}\\right)^2+\\left(\\dfrac{-6}{2}\\right)^2
\\\\(x+5)^2+(y-3)^2&=2+(5)^2+(-3)^2
\\\\(x+5)^2+(y-3)^2&=2+25+9
\\\\(x+5)^2+(y-3)^2&=36
\end{align*}\\]

La réponse est donc un cercle d'équation \\((x+5)^2+(y-3)^2=36.\\)

:::

::: example Passage de la forme canonique à la forme générale de l'équation d'un cercle

Exprimez l'équation du cercle \\((x-2)^2+(y-5)^2=2\\) sous sa forme générale \\(\eqref{cercle-generale} .\\)
Il faudra développer l'équation pour en dégager l'équation générale du cercle.

\\[\begin{align*}
(x-2)^2+(y-5)^2&=2
\\\\x^2-4x+4+y^2-10y+25&=2
\\\\x^2+y^2-4x-10y+4+25-2&=0
\\\\x^2+y^2-4x-10y+27&=0
\end{align*}\\]

La réponse est donc \\(x^2+y^2-4x-10y+27=0.\\)

:::
