class Solution {

    /**
     * @param {number} numCourses
     * @param {number[][]} prerequisites
     * @return {number[]}
     */
    findOrder(numCourses, prerequisites) {

        const graph = new Array(numCourses)
            .fill(0)
            .map(() => []);

        const indegree = new Array(numCourses).fill(0);

        // Build graph + calculate indegree
        for (const [course, prerequisite] of prerequisites) {
            graph[prerequisite].push(course);
            indegree[course]++;
        }

        // Courses with no prerequisites
        const queue = [];

        for (let course = 0; course < numCourses; course++) {
            if (indegree[course] === 0) {
                queue.push(course);
            }
        }

        const result = [];

        let index = 0;

        while (index < queue.length) {

            const course = queue[index++];

            result.push(course);

            // Remove this course as a prerequisite
            for (const nextCourse of graph[course]) {

                indegree[nextCourse]--;

                if (indegree[nextCourse] === 0) {
                    queue.push(nextCourse);
                }
            }
        }

        // Cycle exists
        if (result.length !== numCourses) {
            return [];
        }

        return result;
    }
}