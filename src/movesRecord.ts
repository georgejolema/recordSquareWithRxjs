import { fromEvent } from 'rxjs/Observable/fromEvent';
import { from } from 'rxjs/Observable/from';
import { map, delay, buffer, concatMap } from 'rxjs/operators';
import { async } from 'rxjs/scheduler/async';


const div = document.getElementsByClassName('content')[0];
const square = document.getElementById('square');



/*fromEvent(div, 'mousemove').pipe(
    map(
        (event: any) => ({
            x: event.clientX,
            y: event.clientY
        })
    ),
    buffer(fromEvent(div, 'click')),
    concatMap(x => from(x, async))
)
.subscribe((position: any) => {
    console.log(position);
    square.style.top = position.y;
    square.style.left = position.x;

 });
*/


const mouseEvents$ = fromEvent(div, 'mousemove').pipe(
    map(
        (event: any) => ({
            x: event.clientX,
            y: event.clientY - 50
        })
    ),
    buffer(fromEvent(div, 'click')),
);

mouseEvents$
    .subscribe((positions: any[]) => {
        let i = 0;
        async.schedule(function() {
            if (i === positions.length) { return; }
            const position = positions[i];
            square.style.top = position.y;
            square.style.left = position.x;
            this.schedule(++i, 20);
        }, 20);
    });
