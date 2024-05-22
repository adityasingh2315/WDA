#include <stdio.h>
#include <stdlib.h>
#include <math.h>

// Comparator function for qsort
int compare(const void *a, const void *b) {
    return (*(int *)a - *(int *)b);
}

int main() {
    int T, sum;
    scanf("%d", &T); // Read the number of test cases

    while (T--) {
        int N, K;
        scanf("%d %d", &N, &K); // Read N and K for the current test case

        int a[N];
        for (int i = 0; i < N; i++) {
            scanf("%d", &a[i]); // Read the N elements
        }

        // Sort the array
        qsort(a, N, sizeof(int), compare);

        // Swap the first N elements
        for (int i = 0; i < N && K > 0; i++) {
            if (a[i] == 1) {
                a[i] = 6;
                K--;
            } else if (a[i] == 2) {
                a[i] = 5; // Swap 2 with 5
                K--;
            } else if (a[i] == 3) {
                a[i] = 4; // Swap 3 with 4
                K--;
            }
        }

        // Calculate the sum of updated elements
        sum = 0;
        for (int i = 0; i < N; i++) {
            sum += a[i];
        }
        printf("%d\n", sum); // Print the sum
    }
    return 0;
}


    

    







