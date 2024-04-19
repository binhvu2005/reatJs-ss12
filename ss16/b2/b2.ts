function ac<T>(value: T[], index1: number,index2: number){
    if(index1>0&&index1<value.length&&index2<value.length&&index2>0){
        let temp = value[index1];
        value[index1] = value[index2];
        value[index2] = temp;
        return value;
    }

}