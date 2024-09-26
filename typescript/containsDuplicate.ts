class SolutionDuplicate {
    containsDuplicate(nums: number[]): boolean {
        const mapa: { [key: number]: string } = {};  // Tipado explícito del objeto mapa

        for (const num of nums) {
            if (mapa[num]) {
                return true;
            }
            mapa[num] = num.toString();  // Almacena el número como string
        }

        return false;
    }
}

const solution = new SolutionDuplicate();
console.log(solution.containsDuplicate([1, 2, 3, 1]));