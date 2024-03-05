// 선행스킬
// https://school.programmers.co.kr/learn/courses/30/lessons/49993

function isLearnable (skill, target) {
    let learnable = true;
    const skillArr = skill.split("");

    for (const str of target) {
        // 스킬은 하나라도 먼저 배울 수 없기 때문에 포함되지 않는지 확인
        if (!skillArr.includes(str)) {
            continue;
        }
        // 스킬 내에 포함된 문자열이면 순서대로 열거되어 있는지 확인
        const current = skillArr.shift();
        if (current !== str) {
            // 순서대로가 아니면 배울 수 없음
            learnable = false;
            // 하나라도 false면 배울 수 없음
            break;
        }
    }
    return learnable;
}

console.log(isLearnable('CBD', 'CDA'))

function solution(skill, skill_trees) {
    let answer = 0;

    for (const skillTree of skill_trees) {
        // 각 유저별로 만든 스킬트리가 적합한지 하나씩 확인하기
        if (isLearnable (skill, skillTree)) {
            answer += 1
        }
    }
    return answer;
}

console.log(solution('CBD', ['CDA', 'BEAD', 'ACBF', 'DACB']))