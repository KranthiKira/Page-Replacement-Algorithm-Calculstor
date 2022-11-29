 function pageFaults3(pages, n, capacity)
 
 // Create an array for given number of
        // frames and initialize it as empty.
        let fr = new Set();
    
        // Traverse through page reference array
        // and check for miss and hit.
        let hit = 0;
        let index = 0;
        for (let i = 0; i < pn; i++) {
 
            // Page found in a frame : HIT
            if (search(pg[i], fr)) {
                hit++;
                continue;
            }
 
            // Page not found in a frame : MISS
 
            // If there is space available in frames.
            if (index < fn)
                fr[index++] = pg[i];
 
            // Find the page to be replaced.
            else {
                let j = predict(pg, fr, pn, i + 1);
                fr[j] = pg[i];
            }
        }
 