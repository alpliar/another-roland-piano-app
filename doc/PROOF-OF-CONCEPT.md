# Proof of concept

## Product

### Specifications

The app should implement the following Roland Piano App features : 
- Control of metronome
- Piano settings (tones, split keyboard, ...)
- Recording

## Technical 

### Specficiations

*Frontend stack :*
- React
- Chakra UI
- TypeScript

### Ressources

*Piano related* : 
* [MIDI implementation](https://static.roland.com/assets/media/pdf/RP701_F701_RP107_F107_MIDI_eng01_W.pdf)

*General knowledge* : 
* ["Musical Instrument Digital Interface", on wikipedia](https://en.wikipedia.org/wiki/MIDI)

*How-to* : 
* [Detecting midi messages on Linux](https://superuser.com/questions/1170136/translating-midi-input-into-computer-keystrokes-on-linux/1170232#1170232)

*Tools* : 
* [SendMIDI](https://github.com/gbevin/SendMIDI/tree/master) (https://github.com/gbevin/SendMIDI/releases/tag/1.1.0 latest for linux)
* [Pian.co, on github](https://github.com/drahoslove/pianco/)
* [MIDIVisualizer, on github](https://github.com/kosua20/MIDIVisualizer)

### Bash commands 

To *check that piano is detected by operating system*, run : 

```bash
lsusb | grep "Roland Digital Piano"
```

To *scan midi devices for Roland piano*, run : 

```bash
aconnect -l | grep "Roland Digital Piano"
```
```
client 24: 'Roland Digital Piano' [type=kernel,card=2]
    0 'Roland Digital Piano MIDI 1'
```

Note midi device name, in our case `Roland Digital Piano MIDI 1`

To *sniff midi messages emmited by the piano*, connect piano using USB, and run :

```bash
aseqdump -p "Roland Digital Piano"
```
To *make the piano play some notes*, run : 

```bash
for i in A4 B4 B3 A4 C5; do    ./sendmidi dev "Roland DIgital Piano MIDI 1" on $i 80;    sleep 0.5; done
```
