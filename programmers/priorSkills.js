// 선행스킬

function isLearnable (skill, target) {
    let learnable = true;
    const skillArr = skill.split("");
    for (const str of target) {
        if (!skillArr.includes(str)) {
            continue;
        }
        const current = skillArr.shift();
        if (current !== str) {
            learnable = false;
            break;
        }
    }
    return learnable;
}
function solution(skill, skill_trees) {
    var answer = 0;
    for (const skillTree of skill_trees) {
        if (isLearnable (skill, skillTree)) {
            answer += 1
        }
    }
    return answer;
}

console.log(solution('CBD', ['CDA', 'BEAD', 'ACBF', 'DACB', 'JEQA']))