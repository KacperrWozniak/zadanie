
// Obliczający wynik równania x = a/b. Wynik wypisuje na ekran. W przypadku, kiedy nie można obliczyć wyniku, wyświetli stosowny komunikat.
let a = 5;
let b = 3;
if (a === null || a == 0 || b === null || b == 0)
{
    document.write("Nie można obliczyć wyniku.<br>");
}
else {
    let x = a/b;
    document.write("Wynik dzielenia liczby a: " + a + " i liczby b: " + b + " wynosi: " + x + "<br>");
}
// Obliczający wynik równania x = a/b + c/d . Wynik wypisuje na ekran. W przypadku, kiedy nie można obliczyć wyniku, wyświetli stosowny komunikat.
let c = 9;
let d = 10;

if (a == 0 || b == 0 || c == 0 || d == 0)
{
    document.write("Nie można obliczyć wyniku");
}
else 
{
    let x=(a/b)+(c/d)
    document.write("Wynik dzielenia wynosi: " + x + "<br>"); 
}
// Obliczający wynik równania x = (a+6) / (b – 4). Wynik wypisuje na ekran. W przypadku, kiedy nie można obliczyć wyniku, wyświetli stosowny komunikat.
if (b - 4 === 0)
{
    document.write("Nie można obliczyć wyniku.");
}
else
{
    let x = (a + 6) / (b - 4);
    document.write("Wynik z dzielenia wynosi: " + x + "<br>");
}
// Sprawdzający czy wprowadzona liczba jest parzysta. Na ekran wypisuje stosowny komunikat.
let liczba = 4
document.write("Liczba wynosi: " + liczba + "<br>")
if (liczba % 2 === 0)
{
    document.write("Liczba jest parzysta<br>");
}
else
{
    document.write("Liczba nie jest parzysta<br>");
}
// Wczytujący dwie liczby. Sprawdza czy pierwsza jest podzielna przez drugą. Na ekran wypisuje stosowny komunikat.
if(a%b === 0)
{
    document.write("Liczba jest podzielna.<br>");
}
else
{
    document.write("Liczba nie jest podzielna.<br>");
}
// Sprawdzający czy wprowadzona liczba jest dodatnia, ujemna czy równa 0. Na ekran wypisuje stosowny komunikat.
if(a>0)
{
    document.write("Liczba a jest większa od 0.<br>")
}
if(a<0)
{
    document.write("Liczba jest mniejsza od 0.<br>");
}
else
{
    document.write("Liczba jest równa zeru.<br>");
}
// Wypisujący na ekran największą spośród trzech wprowadzonych liczb.
let najwieksza = a;
if (b > najwieksza) {
    najwieksza = b;
}

if (c > najwieksza) {
    najwieksza = c;
}
document.write("Największa liczba to: " + najwieksza + "<br>");

// Wypisujący trzy wprowadzone liczby w kolejności rosnącej.
let najmniejsza, srodkowa, naj;

if (a <= b && a <= c) {
    najmniejsza = a;
    if (b <= c) {
        srodkowa = b;
        naj = c;
    } else {
        srodkowa = c;
        naj = b;
    }
} else if (b <= a && b <= c) {
    najmniejsza = b;
    if (a <= c) {
        srodkowa = a;
        naj = c;
    } else {
        srodkowa = c;
        naj = a;
    }
} else {
    najmniejsza = c;
    if (a <= b) {
        srodkowa = a;
        naj = b;
    } else {
        srodkowa = b;
        naj = a;
    }
}
document.write("Liczby w kolejności rosnącej: "+ najmniejsza + ", " + srodkowa +", "+ naj);