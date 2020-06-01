function solution(A, K) {
    var pos = 0;
    var factor = 0;
    var result = [];
    for(var i = 0; i < A.length; i++){
        pos = i + K;
        factor = Math.floor(pos / A.length);
        pos -= A.length * factor;
        result[pos] = A[i];
    }
    return result;
}