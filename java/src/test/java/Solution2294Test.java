import org.ap.problem.Solution2294;
import org.junit.jupiter.api.Test;
import static org.junit.jupiter.api.Assertions.assertEquals;

public class Solution2294Test {

    @Test
    void testPartitionArray_case1() {
        Solution2294 solution = new Solution2294();
        int[] nums = {3 ,6,1,2,5};
        int k = 2;
        assertEquals(2, solution.partitionArray(nums, k));
    }

    @Test
    void testPartitionArray_case2() {
        Solution2294 solution = new Solution2294();
        int[] nums = {1,2,3};
        int k = 1;
        assertEquals(2, solution.partitionArray(nums, k));
    }

    @Test
    void testPartitionArray_case3() {
        Solution2294 solution = new Solution2294();
        int[] nums = {2,2,4,5};
        int k = 0;
        assertEquals(3, solution.partitionArray(nums, k));
    }
}