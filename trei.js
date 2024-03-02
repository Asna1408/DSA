class Node{
    constructor(){
        this.children={}
        this.isWordEnd =false
    }
}

class Trie{
    constructor(){
        this.root = new Node()
    }

    insert(word){
        let currentNode = this.root
        for(let i=0;i<word.length;i++){
            let charToInsert = word[i]
            if(!(charToInsert in currentNode.children)){
                currentNode.children[charToInsert]=new Node() 
            }

            currentNode = currentNode.children[charToInsert]
        }
            currentNode.isWordEnd =true;
    }


    contains(word){
        let currentNode = this.root
        for (let i =0;i<word.length;i++){
            let charToFind = word[i]
            if(!(charToFind in currentNode.children)){
                return false
             
            }
            currentNode = currentNode.children[charToFind]
        }
        return currentNode.isWordEnd
    }

    startWithPrefix(word){
        let currentNode = this.root
        for (let i =0;i<word.length;i++){
            let charToFind = word[i]
            if(!(charToFind in currentNode.children)){
                return false
             
            }
            currentNode = currentNode.children[charToFind]
        return true
    }

}

displayWordsWithPrefix(prefix) {
    let currentNode = this.root;
    for (let i = 0; i < prefix.length; i++) {
        let charToFind = prefix[i];
        if (!(charToFind in currentNode.children)) {
            return []; // Prefix not found, return an empty array
        }
        currentNode = currentNode.children[charToFind];
    }

    // Use a recursive function to traverse the trie and collect words
    function collectWords(node, currentWord, words) {
        if (node.isWordEnd) {
            words.push(currentWord);
        }

        for (let char in node.children) {
            collectWords(node.children[char], currentWord + char, words);
        }
    }

    let wordsWithPrefix = [];
    collectWords(currentNode, prefix, wordsWithPrefix);
    return wordsWithPrefix;
}
}


const trie = new Trie()
trie.insert("athul")
trie.insert("athulya")
trie.contains("athul")
trie.startWithPrefix("pth")
function displayWordsWithPrefix(trie, prefix) {
    let wordsWithPrefix = trie.displayWordsWithPrefix(prefix);
    console.log(`Words with prefix "${prefix}": ${wordsWithPrefix.join(', ')}`);
}

displayWordsWithPrefix(trie, "ath");