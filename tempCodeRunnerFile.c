#include <stdio.h>
 
// Below height and width variable can be used
// to create a user-defined sized alphabet's pattern
 
// Number of lines for the alphabet's pattern

 
// Function to find the absolute value
// of a number D
int abs(int d)
{
    return d < 0 ? -1 * d : d;
}
 
// Function to print the pattern of 'A'
void printA()
{
    int height = 5;
// Number of character width in each line
int width = (20 * height) - 1;
    int n = width / 2, i, j;
    for (i = 0; i < height; i++) {
        for (j = 0; j <= width; j++) {
            if (j == n || j == (width - n)
                || (i == height / 2 && j > n
                    && j < (width - n)))
                printf("*");
            else
                printf(" ");
        }
        printf("\n");
        n--;
    }
}

int main()
{
    printA();
    return 0;
}