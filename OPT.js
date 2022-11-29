class GFG
{
    static search(key, fr)
    {
        for (i; i < fr.length; i++)
        {
            if (fr[i] == key)
            {
                return true;
            }
        }
        return false;
    }
    static predict(pg, fr, pn, index)
    {
        var res = -1;
        var farthest = index;
        for (i; i < fr.length; i++)
        {
            var j = 0;
            for (j = index; j < pn; j++)
            {
                if (fr[i] == pg[j])
                {
                    if (j > farthest)
                    {
                        farthest = j;
                        res = i;
                    }
                    break;
                }
            }
            if (j == pn)
            {
                return i;
            }
        }
        return (res == -1) ? 0 : res;
    }
    static pageFaults3(pg, pn, fn)
    {
        var fr = Array(fn).fill(0);
        var hit = 0;
        var index = 0;
        for (i; i < pn; i++)
        {
            if (GFG.search(pg[i], fr))
            {
                hit++;
                continue;
            }
            if (index < fn)
            {
                fr[index++] = pg[i];
            }
            else 
            {
                var j = GFG.predict(pg, fr, pn, i + 1);
                fr[j] = pg[i];
            }
        }
    }
    
    /*static main(args)
    {
        var pg = [7, 0, 1, 2, 0, 3, 0, 4, 2, 3, 0, 3, 2];
        var pn = pg.length;
        var fn = 4;
        GFG.optimalPage(pg, pn, fn);
    } */
}
GFG.main([]);
