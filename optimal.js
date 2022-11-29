
function optimal(pages, size) {

    let frametable = []
    let queue = new Array(size+1)
    let loadedpages = {}
    let pagehits = 0
    let pagefaults = 0
    let baseptr = 0

    for(let pageindex in pages) {
        const page = pages[pageindex]
        if(queue[size-1]==undefined) {
            if(loadedpages[page]==undefined) {
                queue[baseptr] = page
                loadedpages[page] = baseptr
                pagefaults++
                baseptr++
                queue[size] = 'fault'
            }
            else {
                pagehits++
                queue[size] = 'hit'
            }
        }
        else {
            if(loadedpages[page]==undefined) {
                let newarr = pages.slice(pageindex)
                let unusedpage = null
                for(let i=0; i<size; i++) {
                    if(newarr.indexOf(queue[i])==-1) {
                        unusedpage = queue[i]
                        break
                    }
                    else {
                        unusedpage = newarr.indexOf(queue[i]) > newarr.indexOf(unusedpage) ? queue[i] : unusedpage
                    }
                }
    
                baseptr = Number(loadedpages[unusedpage])
    
                queue[baseptr] = page
                delete loadedpages[unusedpage]
                loadedpages[page] = baseptr
                pagefaults++
                queue[size] = 'fault'
            }
            else {
                pagehits++
                queue[size] = 'hit'
            }
        }

        frametable.push([...queue])
    }

    return pagefaults;

}