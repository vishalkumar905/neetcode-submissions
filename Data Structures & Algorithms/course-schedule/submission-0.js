class Solution {
    canFinish(numCourses, prerequisites) {
        const graph = Array.from({ length: numCourses }, () => []);
        const indegree = new Array(numCourses).fill(0);

        // Build graph
        for (const [course, prerequisite] of prerequisites) {
            graph[prerequisite].push(course);
            indegree[course]++;
        }

        // Courses with no prerequisites
        const queue = [];

        for (let i = 0; i < numCourses; i++) {
            if (indegree[i] === 0) {
                queue.push(i);
            }
        }

        let completed = 0;

        while (queue.length > 0) {
            const course = queue.shift();
            completed++;

            // Courses unlocked by completing this course
            for (const nextCourse of graph[course]) {
                indegree[nextCourse]--;

                if (indegree[nextCourse] === 0) {
                    queue.push(nextCourse);
                }
            }
        }

        return completed === numCourses;
    }
}